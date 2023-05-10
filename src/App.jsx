import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import Login from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedComponent from './components/ProtectedComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/protected" component={ProtectedComponent} />
            <Route path="*" render={() => <Redirect to="/login" />} />
          
        </Router>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;