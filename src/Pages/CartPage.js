import React from "react";
import { Link } from "react-router-dom";
import product1 from "../Components/Images/product1.png";
import product2 from "../Components/Images/product2.png";
import product3 from "../Components/Images/product3.png";
import product4 from "../Components/Images/product4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "../Pages/CartPage.css";

export default function CartPage() {
  return (
    <div className="CartPage">
      <h1>Cart (4)</h1>
      <div className="cartItem-container">
        <div className="cartItems one">
          <img src={product1} alt="Nike Airforce" />
          <div className="product-details">
            <h2 className="product-name">
              Nike Airforce 1 <span className="price">N42,000</span>
            </h2>
            <p className="product-size">Size: XL</p>
            <p className="product-color">
              Colour:{" "}
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#f65161" }}
                className="color-icon"
              />
            </p>
            <div>
              <p className="brand-logo">Stride </p>
              <span className="cart-count-buttons">
                <button className="minus">-</button>
                <span className="product-quantity">2</span>
                <button className="plus">+</button>
              </span>
            </div>
          </div>
        </div>
        <div className="cartItems one">
          <img src={product2} alt="Nike Airforce" />
          <div className="product-details">
            <h2 className="product-name">
              Nike Airforce 1 <span className="price">N42,000</span>
            </h2>
            <p className="product-size">Size: XL</p>
            <p className="product-color">
              Colour:{" "}
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#f65161" }}
                className="color-icon"
              />
            </p>
            <div>
              <p className="brand-logo">Stride </p>
              <span className="cart-count-buttons">
                <button className="minus">-</button>
                <span className="product-quantity">2</span>
                <button className="plus">+</button>
              </span>
            </div>
          </div>
        </div>
        <div className="cartItems two">
          <img src={product3} alt="Nike Airforce" />
          <div className="product-details">
            <h2 className="product-name">
              Nike Airforce 1 <span className="price">N42,000</span>
            </h2>
            <p className="product-size">Size: XL</p>
            <p className="product-color">
              Colour:{" "}
              <FontAwesomeIcon icon={faCircle} style={{ color: "#f65161" }} />
            </p>
            <div>
              <p className="brand-logo">Stride </p>
              <span className="cart-count-buttons">
                <button className="minus">-</button>
                <span className="product-quantity">2</span>
                <button className="plus">+</button>
              </span>
            </div>
          </div>
        </div>
        <div className="cartItems two">
          <img src={product4} alt="Nike Airforce" />
          <div className="product-details">
            <h2 className="product-name">
              Nike Airforce 1 <span className="price">N42,000</span>
            </h2>
            <p className="product-size">Size: XL</p>
            <p className="product-color">
              Colour:{" "}
              <FontAwesomeIcon icon={faCircle} style={{ color: "#f65161" }} />
            </p>
            <div>
              <p className="brand-logo">Stride </p>
              <span className="cart-count-buttons">
                <button className="minus">-</button>
                <span className="product-quantity">2</span>
                <button className="plus">+</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="cartSummary">CART SUMMARY</p>
        <div className="sum-total">
          <p className="total-text">SUM:</p>
          <p className="total-price">N168,000</p>
        </div>
      </div>
      <Link to="/checkout">
        {" "}
        <button className="checkoutButton">Proceed to Checkout</button>
      </Link>
    </div>
  );
}
