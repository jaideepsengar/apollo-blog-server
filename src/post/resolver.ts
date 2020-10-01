export default {
  Query: {
    posts: (_parent: any, _args: any, { dataSources }: any) => dataSources.postAPI.getPosts(),
    post: (_parent: any, { id }: any, { dataSources }: any) => dataSources.postAPI.getPostById(id),
  }
}