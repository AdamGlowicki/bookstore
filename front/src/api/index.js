import axios from 'axios';

axios.defaults.timeout = 10000;

const apiUrl = 'http://localhost:3001/api/';

export const getData = (url) => {
  return (axios.get(apiUrl + url))
}
