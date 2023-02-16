import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import { Loading } from '../components';
import PrivateRoute from '../components/PrivateRoute';

const Home = lazy(() =>
  import('../containers')
    .then(({ Home }) => ({ default: Home })),
);

const Login = lazy(() =>
  import('../containers')
    .then(({ Login }) => ({ default: Login })),
);

const Users = lazy(() =>
  import('../containers')
    .then(({ Users }) => ({ default: Users })),
);

const Tasks = lazy(() =>
  import('../containers')
    .then(({ Tasks }) => ({ default: Tasks })),
);

export const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path='/users'
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path='/tasks'
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Suspense>
  );
};
