// Import required functions from Redux
import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Create the Redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;