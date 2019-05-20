import React, { Component } from "react";
import "./Home.css";
import logo from "../Home/yumble_logo.png";

// import { Redirect } from "react-router-dom";

// import RestaurantList from "../RestaurantList/RestaurantList";

class Home extends Component {
  // handleSubmit(e) {
  //   if (e.key === "Enter") {
  //     return <Redirect to="/" />;
  //   }
  // }
  render() {
    return (
      <div>
        <div className="parent">
          <div className="left">
            <h1 className="home-h-one">
              <img src={logo} className="home-logo" alt="" />
            </h1>
          </div>
          <div className="right">
            <div className="searchbar">
              <input
                type="text"
                id="searchLocation"
                placeholder="Delivery Address"
                // onKeyPress={e => this.handleSubmit(e)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
