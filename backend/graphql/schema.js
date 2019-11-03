import { ApolloServer } from 'apollo-server-express';
import TYPEDEFS from './types';
import RESOLVERS from './resolvers';

const SERVER = new ApolloServer({
	typeDefs: TYPEDEFS,
	resolvers: RESOLVERS,
	playground: {
		endpoint: `http://localhost:4000/graphql`,
		settings: {
			'editor.theme': 'light'
		}
	}
});

export default SERVER;
