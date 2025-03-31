import { useState, useEffect } from "react"; // Importing React's State and Effect Hooks

const useFetchProducts = () => {
  // Three state variables:
  const [products, setProducts] = useState([]); // Stores the fetched products from API
  const [error, setError] = useState(null); // Stores error if fetching fails
  const [isLoading, setIsLoading] = useState(true); // Tracks if data is still loading

  useEffect(() => {
    // Async function to fetch products from API
    const fetchProducts = async () => {
      try {
        // Making API request
        let response = await fetch("https://dummyjson.com/products");
        
        // If response is not OK (status code not 200), throw an error
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        // Convert response to JSON
        let data = await response.json();

        // Update state with fetched products
        setProducts(data.products);
      } catch (err) {
        // Update error state if fetching fails
        setError(err.message || "Failed to fetch products");
        console.error("Fetch error:", err);
      } finally {
        // Once data is fetched, set isLoading to false
        setIsLoading(false);
      }
    };

    fetchProducts(); // Calling the function

  }, []); // Empty dependency array means useEffect runs only once when the component mounts

  // Returning fetched data, error, and loading state to the component using this hook
  return { products, error, isLoading };
};

export default useFetchProducts; // Exporting the custom hook
