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
  const newState = Object.assign({}, state);

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

      newState.filteredProducts = payload.slice();
      newState.allProducts = payload.slice();
      newState.maxPrice = Math.max(...priceList);
      newState.minPrice = Math.min(...priceList);

      return newState;
    }

    case SET_GRIDVIEW: {
      newState.gridView = (() => !newState.gridView)();

      return newState;
    }

    case UPDATE_SORT: {
      newState.sortOrder = payload;

      return newState;
    }

    case SORT_PRODUCTS: {
      newState.filteredProducts.sort(sortOrderList[newState.sortOrder]);

      return newState;
    }

    case UPDATE_FILTERS: {
      newState.filters = { ...newState.filters, [payload.name]: payload.value };

      return newState;
    }

    case FILTER_PRODUCTS: {
      const productsfilteredByName = newState.allProducts.filter((product) => {
        if (newState.filters.text === '') return true;

        return product.name
          .toLowerCase()
          .includes(newState.filters.text.toLowerCase());
      });

      const productsfilteredByCategory = productsfilteredByName.filter(
        (product) => {
          if (newState.filters.category === 'all') return true;

          return product.category === newState.filters.category;
        },
      );

      const productsfilteredByCompany = productsfilteredByCategory.filter(
        (product) => {
          if (newState.filters.company === 'all') return true;

          return product.company === newState.filters.company;
        },
      );

      newState.filteredProducts = productsfilteredByCompany;

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default filterReducer;
