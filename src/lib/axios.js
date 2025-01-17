import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://130.185.74.15:9080/card/api/transaction-history/v1',
  headers: {
    //   'accept': 'application/json, text/plain, */*',
    //   'app-name': 'bit',
    authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9...',
  },
});
