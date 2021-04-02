import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
