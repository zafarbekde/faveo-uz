import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import useAuth from '../components/hooks/useAuth';
import LoginPage from './LoginPage';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default ProtectedRoute;
