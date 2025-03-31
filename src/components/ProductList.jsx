// Import necessary dependencies
import React, { useState, useEffect } from "react"; // React hooks for state management
import { Link } from "react-router-dom"; // Link for navigation (though not used in this file)
import useFetchProducts from "../hooks/useFetchProducts"; // Custom hook to fetch products
import ProductItem from "./ProductItem"; // Component for displaying individual product
import "./ProductList.css"; // Importing styles for the component

const ProductList = () => {
  // Destructure the fetched products, error, and loading state from the custom hook
  const { products, error, isLoading } = useFetchProducts();

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // State for debounced search (adds a delay before triggering the search)
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce effect: Updates `debouncedSearch` only after 300ms of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm); // Set debounced value after delay
    }, 300);

    return () => clearTimeout(timer); // Cleanup function to prevent unnecessary updates
  }, [searchTerm]);

  // Show loading message while fetching products
  if (isLoading) return <p className="load">Loading products...</p>;

  // Show error message if fetching fails
  if (error) return <p>{error}</p>;

  // Show message if there are no products
  if (products.length === 0) return <p>No products available.</p>;

  // Filter products based on the debounced search term (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearch.trim().toLowerCase())
  );

  return (
    <div className="product-list">
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Show message if no products match the search term */}
      {filteredProducts.length === 0 ? (
        <p className="no-products">No product of that name found.</p>
      ) : (
        <div className="products-grid">
          {/* Map through filtered products and render ProductItem component */}
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
