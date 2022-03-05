/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const productsReducer = (state, action) => {
  const command = action.type;
  const newData = action.payload;
  const priceFormatter = (price) => price / 100;

  const actions = {
    SIDEBAR_OPEN: { ...state, isSidebarOpen: true },
    SIDEBAR_CLOSE: { ...state, isSidebarOpen: false },
    GET_PRODUCTS_BEGIN: { ...state, productsLoading: true },
    GET_PRODUCTS_SUCCESS: {
      ...state,
      products:
        newData &&
        newData.map((item) => ({
          ...item,
          price: priceFormatter(item.price),
        })),
      productsLoading: false,
      featureProducts:
        newData &&
        newData
          .filter((item) => item.featured)
          .slice(0, 3)
          .map((item) => ({
            ...item,
            price: priceFormatter(item.price),
          })),
    },
    GET_PRODUCTS_ERROR: {
      ...state,
      productsError: true,
      productsLoading: false,
    },
  };

  const isValidAction = () =>
    Object.keys(actions).find((item) => item === command);

  if (isValidAction()) return actions[command];

  throw new Error(`No Matching "${command}" - action type`);
};

export default productsReducer;
