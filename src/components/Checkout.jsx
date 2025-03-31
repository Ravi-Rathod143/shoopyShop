import React from "react"; // Importing React to use JSX and component functionalities
import { useSelector } from "react-redux"; // Importing useSelector to access state from Redux store
import "./Checkout.css"; // Importing CSS for styling the Checkout component
import { useState } from "react";
const Checkout = () => {
  // ✅ Proper state selection: Extracting cart data from Redux store
  const [isPlaced, setIsPlaced] = useState(false)
  const cart = useSelector((state) => state.cart.cart || []); 

  console.log("Cart Data:", cart); // Debugging to check cart data in console

  // Error handling: Ensure cart is an array before proceeding
  if (!Array.isArray(cart)) {
    console.error("Cart is not an array!", cart);
    return <p>Something went wrong! Please try again.</p>;
  }

  // Calculate total price of all items in the cart
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      
      {/* If cart is empty, display a message */}
      {cart.length === 0 ? (
        <p>Your cart is empty. Add products to continue.</p>
      ) : (
        <>
          {/* List of products added to cart */}
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>

          {/* Display total price of the cart items */}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          {/* Button to place an order */}
          {/* <button className="purchase-btn" onClick={() => alert("Order Placed!")}>
            Place Order
          </button> */}
           <button
      className="purchase-btn"
      onClick={() => setIsPlaced(true)}
    >
      {isPlaced ? "😊 Placed" : "Place Order"}
    </button>
        </>
      )}
    </div>
  );
};

export default Checkout; // Exporting the Checkout component for use in the app
