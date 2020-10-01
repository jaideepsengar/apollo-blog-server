import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
// Type definitions
import InterfaceTypeDefs from './common/interface/mutation-response.graphql'
import BlogTypeDefs from './blog/type-defs'
import PostTypeDefs from './post/type-defs'
import UserTypeDefs from './user/type-defs'
// Resolvers
import UserResolver from './user/resolver'
import BlogResolver from './blog/resolver'
import PostResolver from './post/resolver'

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
  typeDefs: [Query, Mutation, InterfaceTypeDefs, BlogTypeDefs, PostTypeDefs, UserTypeDefs],
  resolvers: merge(Resolvers, UserResolver, BlogResolver, PostResolver),
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

export default schema;