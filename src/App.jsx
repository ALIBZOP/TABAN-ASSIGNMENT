import 'react';
import { Container } from '@mui/material';
import TransactionTable from './components/TransactionTable';

const App = () => {
  return (
    <Container maxWidth="lg">
      <TransactionTable />
    </Container>
  );
};

export default App;
