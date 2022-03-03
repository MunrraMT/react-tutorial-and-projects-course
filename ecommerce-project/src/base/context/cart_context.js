import { useContext, createContext } from 'react';
import { node } from 'prop-types';

// import reducer from '../reducers/cart_reducer'
// import {
//   ADD_TO_CART,
//   REMOVE_CART_ITEM,
//   TOGGLE_CART_ITEM_AMOUNT,
//   CLEAR_CART,
//   COUNT_CART_TOTALS,
// } from '../actions'

// const initialState = {}

const CartContext = createContext();

export const CartProvider = ({ children }) => (
  <CartContext.Provider value="cart context">{children}</CartContext.Provider>
);

CartProvider.propTypes = {
  children: node.isRequired,
};

// make sure use
export const useCartContext = () => useContext(CartContext);
