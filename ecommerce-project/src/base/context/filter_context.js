import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { node } from 'prop-types';

import reducer from '../reducers/filter_reducer';
import { useProductsContext } from './products_context';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  // CLEAR_FILTERS,
} from '../actions';

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: false,
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    maxPrice: 0,
    minPrice: 0,
    actualPrice: 0,
    freeShipping: false,
  },
  sortOrder: 'name-a',
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { products } = useProductsContext();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sortOrder]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const toggleGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const updateSortOrder = (order) => {
    dispatch({ type: UPDATE_SORT, payload: order });
  };

  const updateFilters = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {};

  const contextValue = useMemo(
    () => ({
      ...state,
      toggleGridView,
      updateSortOrder,
      updateFilters,
      clearFilters,
    }),
    [state, toggleGridView, updateSortOrder, updateFilters, clearFilters],
  );

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: node.isRequired,
};

// make sure use
export const useFilterContext = () => useContext(FilterContext);
