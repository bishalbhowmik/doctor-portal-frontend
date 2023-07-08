import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const AdminRoute = ({children}) => {

    const {user,loader} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const location = useLocation();

    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>

};

export default AdminRoute;