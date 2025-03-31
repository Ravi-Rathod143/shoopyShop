// Importing necessary dependencies
import React, { useState, useEffect, useCallback } from "react"; // React hooks for state and lifecycle management
import { useParams } from "react-router-dom"; // Hook to access route parameters
import "./ProductDetail.css"; // Importing styles for the component

const ProductDetail = () => {
  // Extract the 'id' parameter from the URL
  const { id } = useParams();

  // State variables to manage product data, loading, and errors
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch product details based on the given ID
  const fetchProduct = useCallback(async () => {
    setLoading(true); // Start loading
    setError(null); // Reset any previous errors

    try {
      let response = await fetch(`https://dummyjson.com/products/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      let data = await response.json();
      setProduct(data); // Store product details in state
    } catch (err) {
      setError(err.message || "Failed to fetch product details"); // Handle fetch errors
      console.error("Fetch error:", err);
    } finally {
      setLoading(false); // Stop loading
    }
  }, [id]); // Function dependency on 'id'

  // Fetch product details when the component mounts or when 'id' changes
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  // Show a loading message while fetching data
  if (loading) return <p className="loading-container">Loading...</p>;

  // Show an error message with a retry button if an error occurs
  if (error)
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={fetchProduct}>Retry</button>
      </div>
    );

  // Render product details once the data is successfully fetched
  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={`Image of ${product.title}`} /> {/* Product image */}
      <h2>{product.title}</h2> {/* Product title */}
      <p>{product.description}</p> {/* Product description */}
      <h3>${product.price}</h3> {/* Product price */}
    </div>
  );
};

export default ProductDetail; // Exporting component for use in the application
