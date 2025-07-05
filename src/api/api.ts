import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  private readonly apiContext: APIRequestContext;
  private readonly baseURL: string;

  constructor(apiContext: APIRequestContext, baseURL: string = 'https://api.example.com') {
    this.apiContext = apiContext;
    this.baseURL = baseURL;
  }

  async get(endpoint: string, options?: any) {
    const response = await this.apiContext.get(`${this.baseURL}${endpoint}`, options);
    return response;
  }

  async post(endpoint: string, data?: any, options?: any) {
    const response = await this.apiContext.post(`${this.baseURL}${endpoint}`, {
      data,
      ...options
    });
    return response;
  }

  async put(endpoint: string, data?: any, options?: any) {
    const response = await this.apiContext.put(`${this.baseURL}${endpoint}`, {
      data,
      ...options
    });
    return response;
  }

  async delete(endpoint: string, options?: any) {
    const response = await this.apiContext.delete(`${this.baseURL}${endpoint}`, options);
    return response;
  }
}

export async function authenticateUser(apiContext: APIRequestContext, username: string, password: string) {
  const client = new ApiClient(apiContext);
  const response = await client.post('/auth/login', {
    username,
    password
  });
  
  if (response.ok()) {
    const data = await response.json();
    return data.token;
  } else {
    throw new Error(`Authentication failed: ${response.status()}`);
  }
}
