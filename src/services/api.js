import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-07-backend.herokuapp.com/',
});

export default api;
