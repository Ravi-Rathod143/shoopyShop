// ✅ Import React and required features
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// ✅ Import the Header component (which is always visible)
import Header from "./components/Header";

// ✅ Lazy load components for better performance
const ProductList = lazy(() => import("./components/ProductList"));  // Home page showing all products
const ProductDetail = lazy(() => import("./components/ProductDetail")); // Individual product details
const Cart = lazy(() => import("./components/Cart"));  // Shopping cart page
const Checkout = lazy(() => import("./components/Checkout"));  // Checkout page
const NotFound = lazy(() => import("./components/NotFound"));  // 404 Page

// ✅ Define the main App component
const App = () => {
  return (
    <Router>
      {/* ✅ Display the Header on all pages */}
      <Header />

      {/* ✅ Handle lazy loading - Show "Loading..." while components are being fetched */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* ✅ Define routes for different pages */}
          <Route path="/" element={<ProductList />} />  {/* Home Page */}
          <Route path="/product/:id" element={<ProductDetail />} />  {/* Product Details Page */}
          <Route path="/cart" element={<Cart />} />  {/* Cart Page */}
          <Route path="/checkout" element={<Checkout />} />  {/* Checkout Page */}
          <Route path="*" element={<NotFound />} />  {/* Catch-all route for 404 */}
        </Routes>
      </Suspense>
    </Router>
  );
};

// ✅ Export the App component
export default App;
