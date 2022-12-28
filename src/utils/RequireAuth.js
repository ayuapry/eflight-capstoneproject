import React from 'react'
import {
    Navigate,
    Outlet,
    useLocation,
    useSearchParams,
  } from 'react-router-dom';

export const RequireAuth = ({ allowedRoles }) => {
    const roles = (localStorage.getItem('role'))
    
      const location = useLocation();
      const [searchParams] = useSearchParams();
      const params = [];
    
      searchParams.forEach((key, value) => {
        params.push([key, value]);
      });
    
      return allowedRoles.includes(roles) ? (
        <Outlet />
      ) : roles ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
      ) : (
        <Navigate
          to={'/login'}
          state={{ from: location, params: params }}
          replace
        />
      );
    };
