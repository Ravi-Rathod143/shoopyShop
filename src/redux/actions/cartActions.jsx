// Define action types as constants to avoid typos and make debugging easier.
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Action creator for adding a product to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Action creator for removing a product from the cart
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
