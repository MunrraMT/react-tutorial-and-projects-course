import { node } from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return isUser ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: node.isRequired,
};

export default PrivateRoute;
