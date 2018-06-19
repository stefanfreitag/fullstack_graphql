import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import courseModel from './models/course';

var coursesData = [
    {
        id: '1',
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs/',
        voteCount: 0
    },
    {
        id: '2',
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/',
        voteCount: 0
    },
    {
        id: '3',
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understand-javascript/',
        voteCount: 0
    }
];

const resolvers = {
    Query: {
        allCourses: (root, {searchTerm}) => {
          /*  return coursesData;*/
            if (searchTerm !== '') {
                courseModel.find({$text: {$search: searchTerm}}).sort({voteCount: 'desc'});
            } else  {        
          return courseModel.find().sort({voteCount: 'desc'});}

        },
        course: (root, {id}) => {
            /**            
            return coursesData.filter(course => {
                return course.id === id;
            })[0];
            **/
            return courseModel.findOne({id: id});
        }
    },
    Mutation: {
        upvote: (root, {id}) => {
            /*
            const course = coursesData.filter(course => {
                return course.id === id;
            })[0];
            course.voteCount++;
            return course;
            */
           return courseModel.findOneAndUpdate({id: id}, {$inc: {"voteCount":1}}, {returnNewDocument: true });
        },
        downvote: (root, {id}) => {
            /*
            const course = coursesData.filter(course => {
                return course.id === id;
            })[0];
            course.voteCount--;
            return course;
            */
           return courseModel.findOneAndUpdate({id: id}, {$inc: {"voteCount":-1}}, {returnNewDocument: true });
        },
        addCourse: (root, {title, author, description, topic, url}) => {
           const course = new courseModel({title: title, author: author, description:description,
             topic:topic, url: url});
             return course.save();
            
        }
    }
};

export default resolvers;