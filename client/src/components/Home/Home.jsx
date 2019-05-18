import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="parent">
        <div className="left">
          <h1>YUMBLE</h1>
        </div>
        <div className="right">
          <div className="searchbar">
            <input type="text" name="search-by-location" placeholder="Search for restaurants in your area!" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
