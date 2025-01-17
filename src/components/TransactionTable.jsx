import { useState, useEffect } from 'react';
import { TransactionHistory } from './Api';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Pagination, Box } from '@mui/material';

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const rowsPerPage = 20;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await TransactionHistory (page - 1, rowsPerPage);
        setTransactions (data.transactions || []);
        setTotalPages (data.totalPages || 1);
      } 
      catch (error) {
        console.error ('خطا در دریافت تراکنش‌ها:', error);
      }
    };

    fetchTransactions();
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
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
            {transactions.map((txn, index) => (
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
        <Pagination count={totalPages} page={page} onChange={handlePageChange} color="primary" />
      </Box>
    </Box>
  );
};

export default TransactionTable;
