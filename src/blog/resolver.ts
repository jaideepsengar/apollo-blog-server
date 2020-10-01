export default {
  Query: {
    blogs: (_parent: any, _args: any, { dataSources }: any) => dataSources.blogAPI.getBlogs(),
    blog: (_parent: any, { id }: any, { dataSources }: any) => dataSources.blogAPI.getBlogById(id),
  }
}