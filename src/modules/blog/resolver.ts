import { Blog } from './../../types.d';
import { MutationCreateBlogArgs } from "../../types";

export default {
  Query: {
    blogs: (_parent: any, _args: any, { dataSources }: any) => dataSources.blogAPI.getBlogs(),
    blog: (_parent: any, { id }: any, { dataSources }: any) => dataSources.blogAPI.getBlogById(id)
  },

  Blog: {
    async blogPosts(parent: Blog,  _args: any, { dataSources }: any) {
      const posts = await dataSources.postAPI.getPosts()
      return posts.filter((post: any) => post.blog === parent.id)
    }
  },

  Mutation: {
    createBlog: async (_parent: any, { blog }: MutationCreateBlogArgs, { dataSources }: any) => {
      const result = await dataSources.blogAPI.createBlog(blog);
      return {
        code: '200',
        success: true,
        message: 'Blog has been created successfully',
        blog: result
      }
    }
  }
}