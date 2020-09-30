import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import BlogTypeDefs from './blog/type-defs'
import PostTypeDefs from './post/type-defs'
import UserTypeDefs from './user/type-defs'

const Query = `
  type Query {
    _empty: String
  }
`;

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [Query, BlogTypeDefs, PostTypeDefs, UserTypeDefs]
});

export default schema;