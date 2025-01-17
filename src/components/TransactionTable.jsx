import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography,Box } from '@mui/material';
import { TransactionHistory } from './Api';

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const rowsPerPage = 20;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await TransactionHistory(rowsPerPage);
        setTransactions(data.transactions || []);
      } catch (error) {
        console.error('خطا در دریافت تراکنش‌ها:', error);
      }
    };

    fetchTransactions();
  },
);



  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        تاریخچه تراکنش‌ها
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>شماره</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((txn, index) => (
              <TableRow key={txn.transactionId}>
                <TableCell>{rowsPerPage + index + 1}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TransactionTable;
