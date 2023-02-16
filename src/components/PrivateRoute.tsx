import React from 'react';
import { Navigate, RouteProps, Route } from 'react-router-dom';


type PrivateRouteProps = RouteProps & {
  children: any;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const auth = localStorage.getItem('userData');
  return auth ? children : <Navigate to='/login' />;
}

export default PrivateRoute;
