import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import rating from "../Components/Images/rating.png";
import right from "../Components/Images/right.png";
import red from "../Components/Images/red.png";
import orange from "../Components/Images/orange.png";
import blue from "../Components/Images/blue.png";
import "./ProductPage.css";
import { ShopContext } from "../Context/ShopContext";

const API_URL = "https://timbu-get-single-product.reavdev.workers.dev/";
const ORGANIZATION_ID = "a09c032504604feea8b83d8c4f88d462";
const APP_ID = "S5AD9TP5NIX3VPT";
const API_KEY = "ab88e71eabfa4722a43f50110939644220240712191917113630";

export default function ProductView() {
  const { addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/products/${id}?organization_id=${ORGANIZATION_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`
        );
        console.log(response.data);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    if (product) {
      const { name, current_price, photos } = product;
      const price = current_price || 0;
      const photoUrl =
        photos && photos.length > 0
          ? `https://api.timbu.cloud/images/${photos[0].url}`
          : "";

      addToCart({
        id: id,
        name: name,
        price: price,
        quantity: 1,
        size: selectedSize,
        color: selectedColor,
        photo: photoUrl,
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const { name, current_price, photos, description } = product;
  const price = current_price || "No Price";

  let parsedDescription;
  try {
    parsedDescription = JSON.parse(description);
  } catch (error) {
    console.error("Failed to parse description JSON:", error);
    parsedDescription = { description: "", size: [], color: [] };
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="Productview">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            className="product-image"
            src={
              photos && photos.length > 0
                ? `https://api.timbu.cloud/images/${photos[0].url}`
                : ""
            }
            alt={name}
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 description">
          <h2 className="display-name">{name}</h2>
          <h3 className="brand-name">Brand Name: Nike</h3>
          <p className="ratings">
            <img src={rating} alt="Rating" /> <b>4.4</b>{" "}
            <span>220 Reviews</span>
          </p>
          <h3 className="price">
            N{price} <span className="discount">(30% Off)</span>
          </h3>
          <h4 className="size-chart-text">
            Size Chart <img src={right} alt="Size Chart" />
          </h4>
          <div className="size-chart">
            {parsedDescription.size.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeClick(size)}
                className={selectedSize === size ? "selected" : ""}
              >
                {size.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="select-color">
            <p>Select Color</p>
            {parsedDescription.color.map((color) => (
              <button
                key={color}
                onClick={() => handleColorClick(color)}
                className={selectedColor === color ? "selected" : ""}
              >
                <img
                  src={
                    color === "red"
                      ? red
                      : color === "orange"
                      ? orange
                      : color === "blue"
                      ? blue
                      : ""
                  }
                  alt={color}
                />
              </button>
            ))}
          </div>
          <Link to="/cart">
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
