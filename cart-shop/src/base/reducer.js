const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING': {
      return { ...state, loading: true };
    }

    case 'DISPLAY_ITEMS': {
      return { ...state, cart: action.payload, loading: false };
    }

    case 'CLEAR_CART': {
      return { ...state, cart: [] };
    }

    case 'REMOVE_ITEM': {
      const newCart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload,
      );

      return { ...state, cart: newCart };
    }

    case 'INCREASE_ITEM': {
      const newCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }

        return cartItem;
      });

      return { ...state, cart: newCart };
    }

    case 'DECREASE_ITEM': {
      const newCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }

        return cartItem;
      });

      const removedNegativeItems = newCart.filter(
        (cartItem) => Number(cartItem.amount) > 0,
      );

      return { ...state, cart: removedNegativeItems };
    }

    case 'GET_TOTAL': {
      const newTotal = state.cart.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.amount,
        0,
      );

      return { ...state, total: Number(newTotal).toFixed(2) };
    }

    case 'GET_AMOUNT': {
      const newAmount = state.cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        0,
      );

      return { ...state, amount: newAmount };
    }

    default:
      break;
  }

  return state;
};

export default reducer;
