import React from "react"; // Importing React for creating a component
import { useDispatch } from "react-redux"; // useDispatch hook to dispatch Redux actions
import { removeFromCart } from "../redux/actions/cartActions"; // Importing action to remove item from cart
import PropTypes from "prop-types"; // PropTypes for type-checking props
import "./CartItem.css"; // Importing CSS for styling

// CartItem Component to display a single product inside the cart
const CartItem = ({ item }) => {
  const dispatch = useDispatch(); // Getting dispatch function from Redux

  return (
    <div className="cart-item"> {/* Container for cart item */}
      <img src={item.thumbnail} alt={item.title} /> {/* Displaying product image */}

      <div className="cart-item-details"> {/* Container for product details */}
        <h4>{item.title}</h4> {/* Displaying product name */}
        <p>${item.price}</p> {/* Displaying product price */}
        <p><strong>Quantity:</strong> {item.quantity}</p> {/* Displaying product quantity in text */}
        
        {/* Remove button to delete item from cart */}
        <button onClick={() => dispatch(removeFromCart(item.id))}>
          Remove
        </button>
      </div>
    </div>
  );
};

// PropTypes to ensure 'item' prop is an object and required
CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem; // Exporting component for use in other files
