// CartPage.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "../Pages/CartPage.css";

export default function CartPage() {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } =
    useContext(ShopContext);

  const handleDecrement = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item.quantity === 1) {
      removeFromCart(itemId);
    } else {
      decrementQuantity(itemId);
    }
  };

  const handleIncrement = (itemId) => {
    incrementQuantity(itemId);
  };

  return (
    <div className="CartPage container">
      <h1>Cart ({cartItems.length})</h1>
      <div className="cartItem-container">
        {cartItems.map((item) => (
          <div key={item.id} className="cartItems">
            <img src={item.photo} alt={item.name} />
            <div className="product-details">
              <h2 className="product-name">
                {item.name} <span className="price">N{item.price}</span>
              </h2>
              <p className="product-size">Size: {item.size}</p>
              <p className="product-color">
                Colour:{" "}
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ color: item.color }}
                  className="color-icon"
                />
              </p>
              <p className="brand-logo">Stride</p>
              <div>
                <span className="cart-count-buttons">
                  <button
                    className="minus"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <span className="product-quantity">{item.quantity}</span>
                  <button
                    className="plus"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="cartSummary">CART SUMMARY</p>
        <div className="sum-total">
          <p className="total-text">SUM:</p>
          <p className="total-price">
            N
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </p>
        </div>
      </div>
      <Link to="/checkout">
        <button className="checkoutButton">Proceed to Checkout</button>
      </Link>
    </div>
  );
}
