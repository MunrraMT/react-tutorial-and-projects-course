/* eslint-disable */
const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART': {
      return { ...state, cart: [] };
    }

    case 'REMOVE_ITEM': {
      const newCart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });

      return { ...state, cart: newCart };
    }

    default:
      break;
  }

  return state;
};

export default reducer;
