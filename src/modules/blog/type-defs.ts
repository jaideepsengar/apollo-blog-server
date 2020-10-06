import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    blogs: [Blog]!
    blog(id: ID!): Blog
    blogsByUser(id: ID!): [Blog]
  }

  extend type Mutation {
    createBlog(blog: BlogInput): CreateBlogMutationResponse
  }

  type Blog {
    id: ID!
    title: String!
    description: String
    user: User!
    posts: [Post]!
  }

  input BlogInput {
    title: String
    description: String
    createdBy: ID!
  }

  type CreateBlogMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    blog: Blog
  }
`