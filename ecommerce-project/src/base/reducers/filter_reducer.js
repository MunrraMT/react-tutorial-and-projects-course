/* eslint-disable no-unreachable */

import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  // UPDATE_FILTERS,
  // FILTER_PRODUCTS,
  // CLEAR_FILTERS,
} from '../actions';

const filterReducer = (state, action) => {
  const { type } = action;
  const { payload } = action;

  switch (type) {
    case LOAD_PRODUCTS: {
      return {
        ...state,
        filteredProducts: [...payload],
        allProducts: [...payload],
      };
    }

    case SET_GRIDVIEW: {
      return { ...state, gridView: (() => !state.gridView)() };
    }

    case UPDATE_SORT: {
      return { ...state, sortOrder: payload };
    }

    case SORT_PRODUCTS: {
      const sortOrderList = {
        'price-lowest': (a, b) => a.price - b.price,
        'price-highest': (a, b) => b.price - a.price,
        'name-a': (a, b) => a.name.localeCompare(b.name),
        'name-z': (a, b) => b.name.localeCompare(a.name),
      };

      return {
        ...state,
        filteredProducts: [
          ...state.filteredProducts.sort(sortOrderList[state.sortOrder]),
        ],
      };
    }

    default: {
      return state;
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filterReducer;
