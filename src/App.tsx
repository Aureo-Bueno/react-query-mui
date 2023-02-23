import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ListUsers from './pages';

const App = () => {
  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <ListUsers />
    </QueryClientProvider>
  );
}

export default App;
