import axios from 'axios';

const apiTaban = axios.create({
  baseURL: 'http://130.185.74.15:9080/card/api/transaction-history/v1',
  headers: {
    'accept': 'application/json, text/plain, */*',
    'app-name': 'bit',
    'authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9...',
    'content-type': 'application/json',
  },
});


export const TransactionHistory = async (pageNumber = 0, pageSize = 20) => {
  try {
    const response = await apiTaban.post('/user-history', {
      pageNumber,
      pageSize,
    });
    return response.data;

  } catch (error) {
        console.error('خطا در دریافت داده‌ها:', error.message);
        throw error;
  }
};
