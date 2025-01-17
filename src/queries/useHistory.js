import { useQuery } from '@tanstack/react-query';

import { client } from '../lib';

export const keys = {
  history: (pageNumber) => ['history', pageNumber],
};

export const getTransactionHistory = (pageNumber = 0, pageSize = 10) =>
  client.post('/user-history', {
    direction: 'DESC',
    filter: { type: null, status: null },
    sortField: 'createdDate',
    order: '',
    sortClass: '',
    pageNumber,
    pageSize,
  });

export const useHistory = (page) =>
  useQuery({
    queryKey: keys.history(page),
    queryFn: () => getTransactionHistory(page),
  });
