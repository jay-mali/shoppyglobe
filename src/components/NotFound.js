import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFound;
