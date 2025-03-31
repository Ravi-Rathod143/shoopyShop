// Import necessary dependencies
import React, { useState } from "react"; // React hooks for state management
import { useDispatch } from "react-redux"; // Redux hook to dispatch actions
import { addToCart } from "../redux/actions/cartActions"; // Action to add products to cart
import PropTypes from "prop-types"; // Prop type validation
import "./ProductItem.css"; // Importing styles for the component
import { Link } from "react-router-dom"; // Import Link for navigation

const ProductItem = ({ product }) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const [added, setAdded] = useState(false); // State to track if the product is added to the cart

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch action to add the product to the cart
    setAdded(true); // Update state to show "Added ✔️" after clicking
  };

  return (
    <div className="product-item">
      {/* Display product image */}
      <img src={product.thumbnail} alt={product.title} />

      {/* Display product title */}
      <h3>{product.title}</h3>

      {/* Display product price */}
      <p>${product.price}</p>

      {/* Add to Cart button with disabled state after adding */}
      <button onClick={handleAddToCart} disabled={added}>
        {added ? "Added ✔️" : "Add to Cart"}
      </button>

      {/* Link to view product details */}
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

// Define prop types for type validation
ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

// Export component for use in other parts of the application
export default ProductItem;
