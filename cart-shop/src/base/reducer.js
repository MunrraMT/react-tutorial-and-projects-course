/* eslint-disable */
const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART': {
      return { ...state, cart: [] };
    }

    case 'REMOVE_ITEM': {
      const newCart = state.cart.filter((cartItem) => {
        return Number(cartItem.id) !== Number(action.payload);
      });

      return { ...state, cart: newCart };
    }

    case 'INCREASE_ITEM': {
      const newCart = state.cart.map((cartItem) => {
        if (Number(cartItem.id) === Number(action.payload)) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }

        return cartItem;
      });

      return { ...state, cart: newCart };
    }

    default:
      break;
  }

  return state;
};

export default reducer;
