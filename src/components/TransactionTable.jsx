import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Pagination, Skeleton, Typography } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { useHistory } from '../queries';

const TransactionList = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const { data: transactionHistory, isLoading, error } = useHistory(page);

  if (isLoading)
    return (
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <Skeleton variant="rectangular" width="100%" height={700} />
      </Box>
    );

  if (error) {
    toast(error, { type: 'error' });
    return null;
  }

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIdx = (page - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const currentTransactions = transactionHistory.data.content.slice(
    startIdx,
    endIdx,
  );

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#E4FAFD',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '67px',
          backgroundColor: '#1DB5C8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />

      <Box
        sx={{
          flex: 1,
          padding: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {currentTransactions.map((txn, index) => (
          <Box
            key={txn.transactionId}
            sx={{
              width: '100%',
              height: 81,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 16px',
              backgroundColor:
                txn.status === 'successful' ? 'lightgreen' : 'lightcoral',
              marginBottom: '8px',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <img
                src={`./icons/wallet ${index + 1}.png`}
                alt={`Icon ${txn.transactionId}`}
                style={{ width: 40, height: 40 }}
              />
              <Typography sx={{ fontWeight: 'bold' }}>
                {txn.transactionId}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Typography sx={{ fontSize: '14px' }}>
                {txn.status === 'successful' ? 'موفق' : 'ناموفق'}
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: txn.status === 'successful' ? 'green' : 'red',
                }}
              >
                {txn.amount} تومان
              </Typography>
              {txn.status === 'successful' ? (
                <CheckCircleIcon sx={{ color: 'green' }} />
              ) : (
                <CancelIcon sx={{ color: 'red' }} />
              )}
            </Box>
          </Box>
        ))}

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
    </Box>
  );
};

export default TransactionList;
