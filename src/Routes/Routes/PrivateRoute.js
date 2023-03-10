import React, { useContext } from 'react';
import { AuthContext } from '../../AuthPorvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
   const {user,loading}=useContext(AuthContext);
   const location=useLocation()
   if(loading){
    return <Spinner className='' animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
   }
   if(!user){
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
   }
   return children;
};

export default PrivateRoute;