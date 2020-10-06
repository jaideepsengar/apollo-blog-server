export default {
  Query: {
    comments: (_parent: any, _args: any, { dataSources }: any) => dataSources.commentAPI.getComments(),
    comment: (_parent: any, { id }: any, { dataSources }: any) => dataSources.commentAPI.getCommentById(id),
  }
}