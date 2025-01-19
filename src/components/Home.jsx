/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Typography } from '@mui/material';
import React from 'react';

const Home = () => (
  <Box sx={{ height: '185vh', backgroundColor: '#E4FAFD', display: 'flex', flexDirection: 'column' }}>
    <Box sx={{ height: 67, backgroundColor: '#1DB5C8', display: 'flex', alignItems: 'center', px: 1 }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <PersonIcon sx={{ color: '#fff', fontSize: 28 }} />
        <AccountBalanceWalletIcon sx={{ color: '#fff', fontSize: 28 }} />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img src="./icons/Group 2500.png" alt="Logo" style={{ height: 30, borderRadius: '50%' }} />
      </Box>
    </Box>

    <Box 
        sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: -2 }}
    >
      <img src="./icons/baner-1.png" alt="Top" style={{ width: 448, height: 180 }} />
      <img src="./icons/baner-2.png" alt="Bottom" style={{ maxWidth: '100%' }} />
      <Typography fontSize="12px" sx={{ color: '#000', textAlign: 'center', marginTop: 1 }}>
        - پر تکرار ترین -
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {Array(4).fill(0).map((_, i) => (
          <img
            key={i}
            src={`./icons/Group ${i + 1}.png`}
            alt={`Icon ${i + 1}`}
            style={{
              width: 120,
              height: 120,
              marginLeft: -20,
              marginRight: -20,
            }}
          />
        ))}
      </Box>
      <img src="./icons/baner-3.png" alt="Bottom" style={{ maxWidth: '100%' }} />
      <Typography fontSize="12px" sx={{ color: '#000', textAlign: 'center', marginTop: 1 }}>
        -خدمات-
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {Array(3).fill(0).map((_, rowIndex) => (
          <Box key={rowIndex} sx={{ display: 'flex', justifyContent: 'center' }}>
            {Array(4).fill(0).map((_, colIndex) => {
              const imgIndex = rowIndex * 4 + colIndex + 1;
              return (
                <img
                  key={imgIndex}
                  src={`./icons/Group ${imgIndex}.png`}
                  alt={`Icon ${imgIndex}`}
                  style={{
                    width: 120,
                    height: 120,
                    marginLeft: -20,
                    marginRight: -20,
                  }}
                />
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'center', marginRight:-10, marginLeft:-10, mt: 2 }}>
      <img
        src="./icons/Group 15.png"
        alt="Footer 1"
        style={{
          width: 200,
          height: 100,
        }}
      />
      <img
        src="./icons/Group 16.png"
        alt="Footer 2"
        style={{
          width: 200,
          height: 100,
        }}
      />
    </Box>
  </Box>
);

export default Home;
