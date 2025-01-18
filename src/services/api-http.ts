import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5881f4e5ed4c4c3eb845a632673f7c4e'
  }
})

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config: AxiosRequestConfig) {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
  }
}

export default APIClient;

