import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    posts: [Post]!
    post(id: ID!): Post
    postByBlog(blogId: ID!): [Post]
  }

  type Post {
    id: ID!
    title: String!
    description: String
    blog: Blog!
  }
`