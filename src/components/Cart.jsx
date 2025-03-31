import React from "react"; // Importing React to use JSX and component functionalities
import { useSelector } from "react-redux"; // Importing useSelector to access Redux store state
import CartItem from "./CartItem"; // Importing the CartItem component to display individual cart items
import { Link } from "react-router-dom"; // Importing Link to enable navigation to the checkout page
import "./Cart.css"; // Importing CSS for styling the Cart component

const Cart = () => {
  // Accessing the cart state from the Redux store
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      
      {/* Check if the cart is empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty</p> // Display a message if no items are in the cart
      ) : (
        <>
          {/* Loop through each item in the cart and render CartItem component */}
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          {/* Button to navigate to the checkout page */}
          <Link to="/checkout">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart; // Exporting the Cart component for use in other parts of the application
