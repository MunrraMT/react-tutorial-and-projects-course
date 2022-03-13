/* eslint-disable no-unreachable */

import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  // UPDATE_SORT,
  // SORT_PRODUCTS,
  // UPDATE_FILTERS,
  // FILTER_PRODUCTS,
  // CLEAR_FILTERS,
} from '../actions';

const filterReducer = (state, action) => {
  const { type } = action;
  const { payload } = action;

  switch (type) {
    case LOAD_PRODUCTS: {
      return { ...state, allProducts: payload };
    }

    case SET_GRIDVIEW: {
      return { ...state, gridView: (() => !state.gridView)() };
    }

    default: {
      return state;
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filterReducer;
