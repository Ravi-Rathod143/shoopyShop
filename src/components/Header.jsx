// Importing required modules
import React from "react"; // Import React to use JSX and functional components
import { Link } from "react-router-dom"; // Import Link to enable navigation between pages
import "./Header.css"; // Importing CSS for styling the Header component

const Header = () => {
  return (
    <header className="header"> {/* Header container */}
      <h1>ShoppyGlobe</h1> {/* Website title */}
      
      {/* Navigation menu */}
      <nav>
        <Link to="/">Home</Link> {/* Link to Home page */}
        <Link to="/cart">Cart</Link> {/* Link to Cart page */}
      </nav>
    </header>
  );
};

export default Header; // Exporting the Header component for use in the app
