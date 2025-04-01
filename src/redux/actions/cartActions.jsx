
//  Define action types as constants to avoid typos and make debugging easier.
export const ADD_TO_CART = "ADD_TO_CART";  // Action for adding an item to the cart
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";  // Action for removing an item from the cart

//  Action creator for adding a product to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,   // Specifies the action type
  payload: product,    // The product object (contains id, title, price, etc.)
});

//  Action creator for removing a product from the cart
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,  // Specifies the action type
  payload: id,  // The ID of the product to be removed
});
