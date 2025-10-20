import axios from 'axios';

export const jsonPlaceholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const myJsonServer = axios.create({
  baseURL: 'https://my-json-server.typicode.com/aquinas-st/santosjson/',
});
