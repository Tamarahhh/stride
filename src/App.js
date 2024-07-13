import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop";
import PaymentPage from "./Pages/PaymentPage";
import ProductView from "./Pages/ProductPage";
import { ShopProvider } from "./Context/ShopContext";

function App() {
  return (
    <div className="App">
      <Router>
        <ShopProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/product/:id" element={<ProductView />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
          <Footer />
        </ShopProvider>
      </Router>
    </div>
  );
}

export default App;
