import { createContext, useContext } from 'react';
import { node } from 'prop-types';
// import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();

export const UserProvider = ({ children }) => (
  <UserContext.Provider value="user context">{children}</UserContext.Provider>
);

UserProvider.propTypes = {
  children: node.isRequired,
};

// make sure use
export const useUserContext = () => useContext(UserContext);
