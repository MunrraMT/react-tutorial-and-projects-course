/* eslint-disable no-unreachable */

import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  // CLEAR_FILTERS,
} from '../actions';

const filterReducer = (state, action) => {
  const { type } = action;
  const { payload } = action;

  const sortOrderList = {
    'price-lowest': (a, b) => a.price - b.price,
    'price-highest': (a, b) => b.price - a.price,
    'name-a': (a, b) => a.name.localeCompare(b.name),
    'name-z': (a, b) => b.name.localeCompare(a.name),
  };

  switch (type) {
    case LOAD_PRODUCTS: {
      const priceList = payload.map((item) => item.price);

      return {
        ...state,
        filteredProducts: [...payload],
        allProducts: [...payload],
        maxPrice: Math.max(...priceList),
        minPrice: Math.min(...priceList),
      };
    }

    case SET_GRIDVIEW: {
      return { ...state, gridView: (() => !state.gridView)() };
    }

    case UPDATE_SORT: {
      return { ...state, sortOrder: payload };
    }

    case SORT_PRODUCTS: {
      return {
        ...state,
        filteredProducts: [
          ...state.filteredProducts.sort(sortOrderList[state.sortOrder]),
        ],
      };
    }

    case UPDATE_FILTERS: {
      return {
        ...state,
        filters: { ...state.filters, [payload.name]: payload.value },
      };
    }

    case FILTER_PRODUCTS: {
      if (state.filters.text !== '') {
        return {
          ...state,
          filteredProducts: [...state.allProducts].filter((product) =>
            product.name.includes(state.filters.text),
          ),
        };
      }

      return {
        ...state,
        filteredProducts: [...state.allProducts],
      };
    }

    default: {
      return state;
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filterReducer;
