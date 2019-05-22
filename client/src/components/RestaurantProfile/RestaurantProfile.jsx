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
        <div className="flex-column">
          <p>{restaurant.name}</p>
          <p> $ </p>
          <p>Est. Delivery: 30min</p>
        </div>
        <div onClick={(e)=>handleClick(e,index)}>
          <h1>></h1>
        </div>
      </div>
    );
  }
}

export default RestaurantProfile;