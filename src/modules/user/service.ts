import { RESTDataSource } from 'apollo-datasource-rest';

export default class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4000/';
  }

  async getUsers() {
    const response = await this.get('users');
    return Array.isArray(response) ? response : [];
  }

  async getUserById(userId: string) {
    const response = await this.get(`users/${userId}`);
    return response;
  }
}
