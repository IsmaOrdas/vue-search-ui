import httpClient from './http-client';

const END_POINT = '/search';

const search = (query) => httpClient.get(`${END_POINT}?q=${query}&type=artist%2Ctrack%2Calbum`);

export {
  search,
};
