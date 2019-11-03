import { gql } from 'apollo-server-express';

const TYPEDEFS = gql`
	type Course {
		id: String
		title: String
		author: String
		description: String
		topic: String
		url: String
		voteCount: Int
	}

	type Query {
		allCourses(searchTerm: String): [Course]
		course(id: String!): Course
	}

	type Mutation {
		addCourse(
			title: String!
			author: String!
			description: String
			topic: String!
			url: String
		): Course
		upvote(id: String!): Course
		downvote(id: String!): Course
	}
`;

export default TYPEDEFS;
