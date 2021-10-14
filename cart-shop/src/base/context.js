import React, { useState, useContext } from 'react';

import { node } from 'prop-types';

import cartItems from './data';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems);

  return (
    <AppContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: node.isRequired,
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
