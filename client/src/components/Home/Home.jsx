import React, { Component } from "react";
import "./Home.css";
import logo from "../Home/yumble_logo.png";

class Home extends Component {
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push("/restaurantlist")
  }

  render() {
    return (
      <div className="home-body">
        <div className="parent">
          <div className="left">
            <h1 className="home-h-one">
              <img src={logo} className="home-logo" alt="" />
            </h1>
          </div>
          <div className="right">
            <div className="searchbar">
              <form onSubmit={(e)=>this.handleSubmit(e)}>
                <input
                  type="text"
                  id="searchLocation"
                  placeholder="Delivery Address"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
