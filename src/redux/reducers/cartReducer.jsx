
//  Import action types from the actions file to ensure consistency.
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

//  Define the initial state of the cart.
// The cart starts as an empty array.
const initialState = {
  cart: [],
};

//  Define the cart reducer function
// It takes the current state and an action as parameters.
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    //  Case 1: ADD_TO_CART
    case ADD_TO_CART: {
      // Check if the product already exists in the cart
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If the item is already in the cart, increase its quantity
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id 
              ? { ...item, quantity: item.quantity + 1 }  // Increase quantity
              : item
          ),
        };
      } else {
        // If the item is not in the cart, add it with quantity = 1
        return { 
          ...state, 
          cart: [...state.cart, { ...action.payload, quantity: 1 }] 
        };
      }
    }

    //  Case 2: REMOVE_FROM_CART
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload 
              ? { ...item, quantity: item.quantity - 1 }  // Decrease quantity
              : item
          )
          .filter(item => item.quantity > 0) // Remove items with quantity 0
      };
    }

    //  Default Case: Return the current state if no matching action is found.
    default:
      return state;
  }
};

//  Export the reducer so it can be used in the Redux store.
export default cartReducer;
