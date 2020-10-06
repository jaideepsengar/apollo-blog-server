import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
// Type definitions
import InterfaceTypeDefs from './common/interface/mutation-response.graphql'
import BlogTypeDefs from './modules/blog/type-defs'
import PostTypeDefs from './modules/post/type-defs'
import UserTypeDefs from './modules/user/type-defs'
import CommentTypeDefs from './modules/comment/type-defs'
// Resolvers
import UserResolver from './modules/user/resolver'
import BlogResolver from './modules/blog/resolver'
import PostResolver from './modules/post/resolver'
import CommentResolver from './modules/comment/resolver'

const Query = `
  type Query {
    _empty: String
  }
`;
const Mutation = `
  type Mutation {
    _empty: String
  }
`;
const Resolvers = {};

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [Query, Mutation, InterfaceTypeDefs, BlogTypeDefs, PostTypeDefs, UserTypeDefs, CommentTypeDefs],
  resolvers: merge(Resolvers, UserResolver, BlogResolver, PostResolver, CommentResolver),
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

export default schema;