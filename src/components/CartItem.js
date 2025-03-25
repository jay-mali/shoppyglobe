import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import "./CartItem.css";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div className="cart-info">
        <h3>{item.title}</h3>
        <p>Price: ₹{item.price.toLocaleString("en-IN")}</p>
        <div className="cart-controls">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
