import { makeExecutableSchema } from "graphql-tools";
import resolvers from './resolvers';

const typeDefs = [ `
  
    type Course {
        id: String
        title: String
        author: String
        description: String
        topic: String
        url: String
        voteCount: Int
    }

    type Query{
        allCourses(searchTerm: String): [Course]
        course(id:String!): Course
    }

    type Mutation{
        addCourse(title: String!, author: String!, description: String, topic: String!, url:String): Course
        upvote(id: String!): Course
        downvote(id: String!): Course
    }
`];

const schema = makeExecutableSchema(
    {
        typeDefs, 
        resolvers}
    );

export default schema