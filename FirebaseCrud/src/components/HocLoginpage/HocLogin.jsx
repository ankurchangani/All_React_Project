import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withLogin = (WrappedComponent) => (props) => {
    const { login, user } = useSelector((state) => state.authReducer);

    if (!login || !user) {
        return <Navigate to="/login-Form" replace />;
    }

    return <WrappedComponent {...props} />;
};

export default withLogin;
