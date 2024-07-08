import React from "react";
import searchIcon from "../Images/search-icon.png";
import "./Navbar.css";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <span>
        <img src={searchIcon} alt="search" className="search-icon" />
      </span>
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
}
