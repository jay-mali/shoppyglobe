import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";

function ProductItem({ product }) {
  const { id, title, price, thumbnail } = product;

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>₹{price.toLocaleString("en-IN")}</p>
      <Link to={`/product/${id}`} className="details-btn">View Details</Link>
    </div>
  );
}

export default ProductItem;
