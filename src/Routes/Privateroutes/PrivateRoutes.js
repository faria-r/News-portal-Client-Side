import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import {  Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


/**
 * only allow a authenticate user
 * redirect user where they were to login
 * 
 */
const PrivateRoutes = ({children}) => {
    const location = useLocation();
   const {user,loading} = useContext(AuthContext);
   if(loading){
    return   <Spinner animation="border" variant="primary" />
   }
   if(user && user.uid){
    return children;
   }
   else{

 return <Navigate to='/login' state={{from:location}} replace></Navigate>
   }
};

export default PrivateRoutes;