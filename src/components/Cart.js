import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart() {
  const cartItems = useSelector(selectCartItems);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2>Your cart is empty.</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <p>Total: <strong>₹{totalPrice.toLocaleString("en-IN")}</strong></p>
        <button onClick={() => alert("Checkout not implemented yet.")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
