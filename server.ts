import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { graphqlSchemas } from './graphql/schema/index';
import { graphqlResolvers } from './graphql/resolvers/index';
import { isAuth } from './Middlewares/is-auth';

import mongoose from "mongoose";


var mongoUrl = 'mongodb://localhost:27017/TacheDB'
mongoose.connect(mongoUrl, { useNewUrlParser: true })
mongoose.connection.once('open', () => console.log('MongoDB connected')).on('error', (err: Error) => console.log(err));
const app = express();

//app.use(isAuth);


app.use('/graphql', graphqlHTTP({
    schema: graphqlSchemas,
    rootValue: graphqlResolvers,
    graphiql: true
}));

app.use('*', cors);


app.listen({ port: 3000 }, () =>
    console.log(`🚀 Server ready at http://localhost:3000}`));