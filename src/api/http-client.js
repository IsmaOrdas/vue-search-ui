import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
