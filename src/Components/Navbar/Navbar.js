import "./Navbar.css";
import cartIcon from "../Images/cart.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <h1>Stride</h1>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="cartIcons">
        <Link to="/cart">
          {" "}
          <img src={cartIcon} alt="cart" className="cart" />
        </Link>
        <div className="cartCount">0</div>
        <p className="cart-text">Cart</p>
      </div>
    </div>
  );
}
