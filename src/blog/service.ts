import { RESTDataSource } from 'apollo-datasource-rest';

export default class BlogAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4000/';
  }

  async getBlogs() {
    const response = await this.get('blogs');
    return Array.isArray(response) ? response : [];
  }

  async getBlogById(id: string) {
    const response = await this.get(`blogs/${id}`);
    return response;
  }

  async createBlog(blog: any) {
    const response = await this.post(`blogs`, {
      title: blog.title,
      description: blog.description,
      createdBy: blog.createdBy
    });
    return response;
  }
}
