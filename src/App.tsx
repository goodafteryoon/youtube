import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
