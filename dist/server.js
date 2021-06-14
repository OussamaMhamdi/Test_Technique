"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var express_graphql_1 = require("express-graphql");
var index_1 = require("./graphql/schema/index");
var index_2 = require("./graphql/resolvers/index");
var is_auth_1 = require("./Middlewares/is-auth");
var mongoose_1 = __importDefault(require("mongoose"));
var mongoUrl = 'mongodb://localhost:27017/TacheDB';
mongoose_1.default.connect(mongoUrl, { useNewUrlParser: true });
mongoose_1.default.connection.once('open', function () { return console.log('MongoDB connected'); }).on('error', function (err) { return console.log(err); });
var app = express_1.default();
app.use(is_auth_1.isAuth);
app.use('/graphql', express_graphql_1.graphqlHTTP({
    schema: index_1.graphqlSchemas,
    rootValue: index_2.graphqlResolvers,
    graphiql: true
}));
app.use('*', cors_1.default);
app.listen({ port: 4000 }, function () {
    return console.log("\uD83D\uDE80 Server ready at http://localhost:4000}");
});
