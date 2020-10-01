import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import BlogTypeDefs from './blog/type-defs'
import PostTypeDefs from './post/type-defs'
import UserTypeDefs from './user/type-defs'
import UserResolver from './user/resolver'

const Query = `
  type Query {
    _empty: String
  }
`;
const resolvers = {};

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [Query, BlogTypeDefs, PostTypeDefs, UserTypeDefs],
  resolvers: merge(resolvers, UserResolver),
});

export default schema;