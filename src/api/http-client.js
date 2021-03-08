import axios from 'axios';
import { requestToken } from '@/api/token.api';

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      requestToken();
    }
    return Promise.reject(error);
  },
);

export default httpClient;
