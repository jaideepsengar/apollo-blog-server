import { RESTDataSource } from 'apollo-datasource-rest';

export default class PostAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4000/';
  }

  async getPosts() {
    const response = await this.get('posts');
    return Array.isArray(response) ? response : [];
  }

  async getPostById(id: string) {
    const response = await this.get(`posts/${id}`);
    return response;
  }
}
