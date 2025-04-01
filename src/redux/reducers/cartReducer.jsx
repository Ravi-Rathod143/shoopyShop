// Import action types from the actions file
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

// Define the initial state of the cart
const initialState = {
  cart: [],
};

// Cart reducer function
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      return existingItem
        ? {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0),
      };

    default:
      return state;
  }
};

export default cartReducer;