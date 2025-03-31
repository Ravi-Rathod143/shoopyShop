// ✅ Import required functions from Redux
import { createStore, combineReducers } from "redux";

// ✅ Import the cart reducer
import cartReducer from "./reducers/cartReducer";

// ✅ Combine multiple reducers into a single root reducer
// Since we might add more reducers in the future, we use `combineReducers`
// The `cart` key will store the state managed by `cartReducer`
const rootReducer = combineReducers({
  cart: cartReducer, // The `cart` key will hold the cartReducer's state
});

// ✅ Create the Redux store
// `createStore` initializes the store using the root reducer
// The second argument enables Redux DevTools support (if available in the browser)
const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enables Redux DevTools for debugging
);

// ✅ Export the store so it can be used throughout the application
export default store;
