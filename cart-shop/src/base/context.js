/* eslint-disable */
import { useContext, createContext, useReducer } from 'react';

import { node } from 'prop-types';

import cartItems from './data';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <AppContext.Provider value={{ ...state, clearCart, removeItem }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: node.isRequired,
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
