export default {
  Query: {
    blogs: (_parent: any, _args: any, { dataSources }: any) => dataSources.blogAPI.getBlogs(),
    blog: (_parent: any, { id }: any, { dataSources }: any) => dataSources.blogAPI.getBlogById(id)
  },

  Mutation: {
    createBlog: async (_parent: any, { blog }: any, { dataSources }: any) => {
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