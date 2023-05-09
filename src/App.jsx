import LoginPage from "./components/LoginPage";
import { QueryClient, QueryClientProvider } from 'react-query';

import './css/App.css'

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        <LoginPage />
      </div>

    </QueryClientProvider>
  )
}; 

export default App;
