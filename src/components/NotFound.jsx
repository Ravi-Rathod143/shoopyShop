// Importing required modules
import React from "react"; // Import React to use JSX and functional components
import { Link } from "react-router-dom"; // Import Link to enable navigation
import "./NotFound.css"; // Importing CSS for styling the NotFound component

// Functional component for handling 404 errors (Page Not Found)
const NotFound = () => {
  return (
    <div className="not-found"> {/* Wrapper div for styling */}
      <h2>404 - Page Not Found</h2> {/* Heading for error message */}
      <p>Oops! The page you are looking for does not exist.</p> {/* Error description */}

      {/* Navigation link to redirect users back to the home page */}
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default NotFound; // Exporting NotFound component for use in the app
