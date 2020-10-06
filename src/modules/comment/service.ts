import { RESTDataSource } from 'apollo-datasource-rest';

export default class CommentAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4000/';
  }

  async getComments() {
    const response = await this.get('comments');
    return Array.isArray(response) ? response : [];
  }

  async getCommentById(id: string) {
    const response = await this.get(`comments/${id}`);
    return response;
  }
}
