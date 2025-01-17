import {
  Box,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { useHistory } from '../queries';

const TransactionTable = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const { data: transactionHistory, isLoading, error } = useHistory(page);

  if (!transactionHistory?.data || isLoading) return <h1>loading...</h1>;

  console.log((page - 1) * rowsPerPage + 1, page, rowsPerPage);

  if (error)
    return toast(error, {
      type: 'error',
    });

  const handlePageChange = (event, value) => {
    setPage(value);
    console.log('event', event);
  };

  return (
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        تاریخچه تراکنش‌ها
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>شماره</TableCell>
              <TableCell>تاریخ</TableCell>
              <TableCell>مبلغ</TableCell>
              <TableCell>وضعیت</TableCell>
              <TableCell>دلیل خطا</TableCell>
              <TableCell>شماره تراکنش</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionHistory.data.content.map((txn, index) => (
              <TableRow key={txn.transactionId}>
                <TableCell>{(page - 1) * rowsPerPage + index + 1}</TableCell>
                <TableCell>{txn.date}</TableCell>
                <TableCell>{txn.amount}</TableCell>
                <TableCell>{txn.status}</TableCell>
                <TableCell>{txn.reason || '-'}</TableCell>
                <TableCell>{txn.transactionId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Pagination
          count={transactionHistory.data.totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default TransactionTable;
