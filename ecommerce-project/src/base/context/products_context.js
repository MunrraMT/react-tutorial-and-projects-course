import { createContext, useContext } from 'react';
import { node } from 'prop-types';

// import axios from 'axios'

// import reducer from '../reducers/products_reducer'
// import { products_url as url } from '../utils/constants'
// import {
//   SIDEBAR_OPEN,
//   SIDEBAR_CLOSE,
//   GET_PRODUCTS_BEGIN,
//   GET_PRODUCTS_SUCCESS,
//   GET_PRODUCTS_ERROR,
//   GET_SINGLE_PRODUCT_BEGIN,
//   GET_SINGLE_PRODUCT_SUCCESS,
//   GET_SINGLE_PRODUCT_ERROR,
// } from '../actions'

// const initialState = {}

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => (
  <ProductsContext.Provider value="products context">
    {children}
  </ProductsContext.Provider>
);

ProductsProvider.propTypes = {
  children: node.isRequired,
};

// make sure use
export const useProductsContext = () => useContext(ProductsContext);
