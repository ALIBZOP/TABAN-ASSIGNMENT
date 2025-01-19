import PersonIcon from '@mui/icons-material/Person';
import { Box, Typography } from '@mui/material';
import React from 'react';

const CustomerClub = () => {
  return (
    <Box
      sx={{
        height: '90vh',
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
          justifyContent: 'space-around',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#fff',
            flex: 1,
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          پروفایل
        </Typography>

        <Box>
          <PersonIcon
            sx={{
              color: '#fff',
              fontSize: '32px',
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#000',
            textAlign: 'center',
          }}
        >
          ... صفحه پروفایل به زودی
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomerClub;
