const debug = require('debug');
const express = require('express');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const graphqlHTTP = require('express-graphql');

const app = express();
const dlog = debug('graphql-help-template:index');

function resolve(root, args, context, ast) {
  dlog('resolve');
  return 'world';
}

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve,
      },
    },
  }),
});

app.use(
  '/',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen({ port: 9090 }, () => {
  dlog('listening on port 9090');
});
