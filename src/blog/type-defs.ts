import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    blogs: [Blog]!
    blog(id: ID!): Blog
    blogsByUser(id: ID!): [Blog]
  }

  type Blog {
    id: ID!
    title: String!
    description: String
    user: User!
    posts: [Post]!
  }
`