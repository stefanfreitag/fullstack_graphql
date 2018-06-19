
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import mongoose from 'mongoose';

import schema from './schema';

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost/graphqlserver');

const connection = mongoose.connection;

connection.once('open', 
    () =>  {console.log('MongDB connection established.');}
);

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

app.listen(4000, () => console.log('Express server running on port 4000'));