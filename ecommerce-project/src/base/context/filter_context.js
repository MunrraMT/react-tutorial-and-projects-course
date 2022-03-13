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
  // UPDATE_FILTERS,
  // FILTER_PRODUCTS,
  // CLEAR_FILTERS,
} from '../actions';

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: false,
  filters: [],
  sortOrder: '',
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

  const toggleGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const updateSortOrder = (order) => {
    dispatch({ type: UPDATE_SORT, payload: order });
  };

  const sortProduct = () => {
    dispatch({ type: SORT_PRODUCTS });
  };

  const contextValue = useMemo(
    () => ({ ...state, toggleGridView, updateSortOrder, sortProduct }),
    [state, toggleGridView, updateSortOrder, sortProduct],
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
