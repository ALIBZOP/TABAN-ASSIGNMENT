import { useMutation } from '@tanstack/react-query';

import { client } from '../lib';

const keys = {
  history: () => ['history'],
};

export const getTransactionHistory = async (pageNumber = 0, pageSize = 20) => {
  const response = await client.post('/user-history', {
    direction: 'DESC',
    filter: { type: null, status: null },
    sortField: 'createdDate',
    order: '',
    sortClass: '',
    pageNumber,
    pageSize,
  });
  return response.data;
};

export const useHistory = () => {
  useMutation(keys.history, getTransactionHistory);
};
