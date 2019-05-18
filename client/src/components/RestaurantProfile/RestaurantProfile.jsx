import React, {Component} from "react";
import bitmap_2 from './assets/bitmap_2.png'

class RestaurantProfile extends Component {
  render() {
    return (
      <div className="restaurant-list">
          <div className="flex-around">
            <img src={bitmap_2} alt=" "/>
          <div cass="flex-column">
            <p>Restaurant Name</p>
            <p> $ </p>
            <p>Est. Delivery</p>
          </div>
          <div>
            <h1>></h1>
          </div>
        </div>
    </div>
    )
  }
}

export default RestaurantProfile;
