// Import action types from the actions file
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

// Load cart data from localStorage 
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

// Cart reducer function
const cartReducer = (state = initialState, action) => {
  let updatedCart;
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      updatedCart = existingItem
        ? state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cart, { ...action.payload, quantity: 1 }];

      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ localStorage update

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case REMOVE_FROM_CART: {
      updatedCart = state.cart
        .map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ localStorage update

      return {
        ...state,
        cart: updatedCart,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
