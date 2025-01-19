import GroupIcon from '@mui/icons-material/Group';
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
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#fff',
            textAlign: 'center',
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          باشگاه مشتریان
        </Typography>

        <Box>
          <GroupIcon
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
          ... باشگاه مشتریان به زودی
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomerClub;
