import React, { useState } from "react";
import { PRODUCT } from "../Components/Product";
import "./Product.css";
import Hero from "../Components/Hero/Hero";
import ProductList from "../Pages/ProductListPage";

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Cart:", cart);
  };

  return (
    <div className="Shop">
      <Hero />
      <div className="products">
        {PRODUCT.map((product) => (
          <ProductList key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
