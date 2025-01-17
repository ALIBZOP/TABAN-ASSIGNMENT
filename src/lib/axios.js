import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const AUTHORIZATION_TOKEN = import.meta.env.VITE_API_AUTHORIZATION_TOKEN;

export const client = axios.create({
  baseURL: `${BASE_URL}/card/api/transaction-history/v1`,
  headers: {
    authorization: `Bearer ${AUTHORIZATION_TOKEN}`,
    // accept: 'application/json, text/plain, */*',
    // 'accept-language': 'en-US,en;q=0.9,fa;q=0.8,ru;q=0.7',
    // 'app-name': 'bit',
  },
});
