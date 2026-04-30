import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivetRouter = ({children}) => {

    const {user, loading} = useAuth();

    if (loading) {
        return (
          <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-xl"></span>
          </div>
        );
    }
    if (!user) {
        return <Navigate to={"/login"}></Navigate>
    }

    return children
};

export default PrivetRouter;