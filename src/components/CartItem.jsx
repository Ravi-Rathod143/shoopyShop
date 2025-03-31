// src/components/CartItem.js
import React from "react"; // Importing React to use JSX and component functionalities
import { useDispatch } from "react-redux"; // Importing useDispatch to dispatch actions to the Redux store
import { removeFromCart } from "../redux/actions/cartActions"; // Importing the action to remove an item from the cart
import PropTypes from "prop-types"; // Importing PropTypes for type checking of props
import "./CartItem.css"; // Importing CSS for styling the CartItem component

const CartItem = ({ item }) => {
  const dispatch = useDispatch(); // Initializing useDispatch hook to dispatch actions

  return (
    <div className="cart-item">
      {/* Displaying the product image */}
      <img src={item.thumbnail} alt={item.title} />

      {/* Displaying product details */}
      <div className="cart-item-details">
        <h4>{item.title}</h4> {/* Product title */}
        <p>${item.price}</p> {/* Product price */}

        {/* Button to remove the item from the cart */}
        <button onClick={() => dispatch(removeFromCart(item.id))}>
          Remove
        </button>
      </div>
    </div>
  );
};

// PropTypes to ensure the correct prop type is passed
CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem; // Exporting the CartItem component for use in the Cart component
