import { createContext, useContext, useEffect, useReducer } from 'react';
import { node } from 'prop-types';

import reducer from '../reducers/filter_reducer';
import { useProductsContext } from './products_context';
import {
  LOAD_PRODUCTS,
  // SET_GRIDVIEW,
  // SET_LISTVIEW,
  // UPDATE_SORT,
  // SORT_PRODUCTS,
  // UPDATE_FILTERS,
  // FILTER_PRODUCTS,
  // CLEAR_FILTERS,
} from '../actions';

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: false,
  filters: [],
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { products } = useProductsContext();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <FilterContext.Provider value={state}>{children}</FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: node.isRequired,
};

// make sure use
export const useFilterContext = () => useContext(FilterContext);
