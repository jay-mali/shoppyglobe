import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total items in cart
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ShoppyGlobe</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/cart" className="cart-link">
              Cart
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
