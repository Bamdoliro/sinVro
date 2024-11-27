import axios from 'axios';

const BASE_URL = 'https://sinabro.maru-base.com';

export const sinabro = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});
