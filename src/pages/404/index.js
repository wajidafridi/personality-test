import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page">
      <h2>Page Not Found</h2>
      <p>The requested page does not exist.</p>
      <Link to="/" className="home-link">
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
