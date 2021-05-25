export const initialState = {
  basket: [],
  user: null,
};

// Selector
export function getBasketTotal(basket) {
  return basket?.reduce((amount, item) => item.price + amount, 0);
}

export function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET": {
      const index = state.basket.findIndex(
        (basket) => basket.id === action.payload
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product with (id: ${action.payload} as is not in basket)`
        );
        return;
      }
      return {
        ...state,
        basket: newBasket,
      };
    }
    case "SET_USER": {
      let newUser = null;
      if (!action.payload) {
        return {
          ...state,
          user: newUser,
        };
      } else {
        newUser = {
          id: action.payload.uid,
          email: action.payload.email,
        };
        return {
          ...state,
          user: newUser,
        };
      }
    }

    default:
      return state;
  }
}
