import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    comments: [Comment]!
    comment(id: ID!): Comment
    commentsByPost(postId: ID!): [Comment]
  }

  type Comment {
    id: ID!
    description: String
    post: Post!
  }
`