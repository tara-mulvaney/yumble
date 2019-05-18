import React from "react";
import "./Home.css";
import logo from "../Home/yumble_logo.png"

function Home() {
  return (
    <div>
      <div className="parent">
        <div className="left">
          <h1><img src={logo}/></h1>
        </div>
        <div className="right">
          <div className="searchbar">
            <input type="text" id="searchLocation" placeholder="Delivery Address" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
