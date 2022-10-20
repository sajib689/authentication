import React, { Children } from 'react';
import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './../Contexts/UserContext';

const PrivateRoute = ({children}) => {
    
    const {user} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    if (user && user.uid) {
    return children;
}
    return <Navigate to='/login'></Navigate>
    
};

export default PrivateRoute;