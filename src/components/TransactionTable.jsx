/* eslint-disable simple-import-sort/imports */
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
  Skeleton,
} from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { useHistory } from '../queries';

const TransactionTable = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const { data: transactionHistory, isLoading, error } = useHistory(page);

  if (isLoading)
    return (
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Transaction History
        </Typography>
        <TableContainer component={Paper}>
          <Skeleton variant="rectangular" width={750} height={600} />
        </TableContainer>
      </Box>
    );

  if (error) {
    toast(error, { type: 'error' });
    return null;
  }

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Transaction History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {[
                'Number',
                'Date',
                'Amount',
                'Status',
                'Error reason',
                'Transaction number',
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionHistory.data.content.map((txn, index) => (
              <TableRow
                key={txn.transactionId}
                sx={{
                  backgroundColor: index % 2 === 0 ? 'lightgray' : 'white',
                }}
              >
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
          sx={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />
      </Box>
    </Box>
  );
};

export default TransactionTable;
