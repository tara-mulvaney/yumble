import React, { Component } from "react";
import bitmapTwo from "../../assets/bitmap_2.png";

import "./RestaurantProfile.css"

class RestaurantProfile extends Component {
  render() {
    const {restaurant,index,history,handleClick} = this.props
    console.log(index);
    return (
      <div className="restaurant-list">
        <img src={restaurant.photo} alt=" " />
        <div className="restaurant-flex-column">
          <p className="restaurant-name">{restaurant.name}</p>
          <p className="restaurant-price"> $ </p>
          <p className="restaurant-deliv">Est. Delivery: 30min</p>
        </div>
        <div className="restaurant-click" onClick={(e)=>handleClick(e,index)}>
          <h1>></h1>
        </div>
      </div>
    );
  }
}

export default RestaurantProfile;