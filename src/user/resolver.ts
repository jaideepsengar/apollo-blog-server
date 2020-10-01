export default {
  Query: {
    users: (_parent: any, _args: any, { dataSources }: any) => dataSources.userAPI.getUsers(),
    user: (_parent: any, { id }: any, { dataSources }: any) => dataSources.userAPI.getUserById({userId: id}),
  }
}