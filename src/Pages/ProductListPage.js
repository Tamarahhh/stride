import React, { useState } from "react";
import "./Product.css";

export default function ProductList(props) {
  const { id, image, title, price } = props.data;

  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    setQuantity(Math.max(quantity - 1, 0));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    props.addToCart({ id, quantity });
    alert("Item has been added to cart");
  };

  return (
    <div className="product">
      <div>
        <img src={image} alt={title} className="productImage" />
      </div>
      <p className="productTitle">{title}</p>
      <p className="productPrice">{price}</p>
      <div className="cartButtons">
        <button
          className="minus"
          onClick={handleDecrement}
          disabled={quantity === 0}
        >
          -
        </button>
        <span>{quantity}</span>
        <button className="plus" onClick={handleIncrement}>
          +
        </button>
        <button className="addToCartButton" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
