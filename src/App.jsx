import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
} from '@mui/material';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import CustomerClub from './components/CustomerClub';
import Home from './components/Home';
import Profile from './components/Profile';
import TransactionTable from './components/TransactionTable';

const App = () => {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(location.pathname);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Container
      maxWidth="lg"
      style={{
        marginBottom: '70px',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '393px',
          maxWidth: '100%',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<TransactionTable />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/customerclub" element={<CustomerClub />} />
        </Routes>
      </Box>

      <Box
        sx={{
          position: 'fixed',
          bottom: '35px',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            width: '60px',
            height: '60px',
            backgroundColor: '#1DB5C8',
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <HomeIcon sx={{ color: 'white', fontSize: '30px' }} />
        </Box>
      </Box>

      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          width: '393px',
          maxWidth: '100%',
          margin: '0 auto',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        }}
      >
        <BottomNavigation
          value={currentTab}
          onChange={handleTabChange}
          showLabels
          sx={{
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
          }}
        >
          <BottomNavigationAction
            label="پروفایل"
            icon={<PersonIcon />}
            component={Link}
            to="/profile"
            value="/profile"
            sx={{
              boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
              color: currentTab === '/profile' ? '#1DB5C8' : '#000',
              '&.Mui-selected': {
                borderBottom: '2px solid #1DB5C8',
              },
            }}
          />
          <BottomNavigationAction
            label="گزارشات"
            icon={<ListIcon />}
            component={Link}
            to="/transactions"
            value="/transactions"
            sx={{
              boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
              color: currentTab === '/transactions' ? '#1DB5C8' : '#000',
              '&.Mui-selected': {
                borderBottom: '2px solid #1DB5C8',
              },
            }}
          />
          <BottomNavigationAction
            label="مشتریان"
            icon={<GroupIcon />}
            component={Link}
            to="/customerclub"
            value="/customerclub"
            sx={{
              boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
              color: currentTab === '/customerclub' ? '#1DB5C8' : '#000',
              '&.Mui-selected': {
                borderBottom: '2px solid #1DB5C8',
              },
            }}
          />
          <BottomNavigationAction
            label="خانه"
            icon={<HomeIcon />}
            component={Link}
            to="/"
            value="/"
            sx={{
              boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
              color: currentTab === '/' ? '#1DB5C8' : '#000',
              '&.Mui-selected': {
                borderBottom: '2px solid #1DB5C8',
              },
            }}
          />
        </BottomNavigation>
      </Box>
    </Container>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);
