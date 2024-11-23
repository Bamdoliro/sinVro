import axios from 'axios';
import { BASE_URL } from '@env';

export const sinabro = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});
