import { createContext, useContext } from 'react';
import { node } from 'prop-types';

// import reducer from '../reducers/filter_reducer'
// import {
//   LOAD_PRODUCTS,
//   SET_GRIDVIEW,
//   SET_LISTVIEW,
//   UPDATE_SORT,
//   SORT_PRODUCTS,
//   UPDATE_FILTERS,
//   FILTER_PRODUCTS,
//   CLEAR_FILTERS,
// } from '../actions'
// import { useProductsContext } from './products_context'

// const initialState = {}

const FilterContext = createContext();

export const FilterProvider = ({ children }) => (
  <FilterContext.Provider value="filter context">
    {children}
  </FilterContext.Provider>
);

FilterProvider.propTypes = {
  children: node.isRequired,
};

// make sure use
export const useFilterContext = () => useContext(FilterContext);
