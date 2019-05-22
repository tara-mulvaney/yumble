import React from "react";
import "./Header.css";
import logo from "../Home/yumble_logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
      <div className="cart-icon-flex">
        <Link to="/">
          <img src={logo} className="home-logo-header" alt="" />
        </Link>
        <Link to="/cart">
            <i className="fas fa-shopping-cart fa-3x" />
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
