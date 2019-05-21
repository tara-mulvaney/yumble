import React from "react";
import "./Header.css";
import logo from "../Home/yumble_logo.png";

function Header() {
  return (
    <div>
      <div className="header">
      <img src={logo} className="home-logo" alt="" />
      </div>
    </div>
  );
}

export default Header;
