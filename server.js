const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchemas = require('./graphql/schema/index');
const graphqlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./Middlewares/is-auth');

const db = require('./Environnement/connection');


db();
const app = express();

app.use(isAuth);


app.use('/graphql', graphqlHTTP({
    schema: graphqlSchemas,
    rootValue: graphqlResolvers,
    graphiql: true
}));

app.use('*', cors());


app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000}`));