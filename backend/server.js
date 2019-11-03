import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import SERVER from './graphql/schema';

const APP = express();

APP.use(cors());

mongoose.connect('mongodb://localhost/graphqlserver');

const connection = mongoose.connection;

connection.once('open', 
    () =>  {console.log('MongDB connection established.');}
);

SERVER.applyMiddleware({
    app: APP
});

APP.listen(4000, () => console.log('Express server running on port 4000'));
