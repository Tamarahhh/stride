import React, { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./Product.css";
import { Link } from "react-router-dom";

const baseUrl = "https://api.timbu.cloud/images/";

export default function ProductList(props) {
  const { data } = props;
  const { addToCart } = useContext(ShopContext);

  const [quantity, setQuantity] = useState(0);

  if (!data) {
    return <div>No product data available</div>;
  }

  const { name, current_price, id, photos } = data;

  const handleDecrement = () => {
    setQuantity(Math.max(quantity - 1, 0));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    const price =
      current_price && current_price.length > 0 && current_price[0].NGN
        ? current_price[0].NGN[0]
        : 0;
    const image = photos && photos.length > 0 ? baseUrl + photos[0].url : "";
    addToCart({ id, name, price, quantity, image });
    setQuantity(0);
  };

  const photoUrl =
    photos && photos.length > 0
      ? baseUrl + photos[0].url
      : "https://via.placeholder.com/150";

  const price =
    current_price && current_price.length > 0 && current_price[0].NGN
      ? current_price[0].NGN[0]
      : "No Price";

  return (
    <div className="product">
      <div>
        <img src={photoUrl} alt={name} className="productImage" />
      </div>
      <p className="productTitle">{name}</p>
      <p className="productPrice">N{price}</p>
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
        <Link to={`/product/${id}`}>
          <button className="addToCartButton" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}
