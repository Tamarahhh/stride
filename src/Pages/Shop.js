import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";
import Hero from "../Components/Hero/Hero";
import ProductList from "./ProductListPage";

const ORGANIZATION_ID = "a09c032504604feea8b83d8c4f88d462";
const APP_ID = "S5AD9TP5NIX3VPT";
const API_KEY = "ab88e71eabfa4722a43f50110939644220240712191917113630";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page) => {
    try {
      const response = await axios.get(
        `/api/products?organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=${page}&size=12&Appid=${APP_ID}&Apikey=${API_KEY}`
      );
      const { items, total, size } = response.data;
      setProducts(items);
      setTotalPages(Math.ceil(total / size));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="Shop">
      <Hero />
      <div className="products">
        {products.map((product) => (
          <ProductList key={product.id} data={product} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
