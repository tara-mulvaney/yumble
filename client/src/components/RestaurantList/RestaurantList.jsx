import React from "react";
import FiltRestaurants from "./FilterRestaurants";

function RestaurantList() {
  return (
    <div>
      <FiltRestaurants />
    </div>
  );

class RestaurantList extends Component {
  render() {
    return (
    <div>
      <RestaurantProfile />
      <RestaurantProfile />
      <RestaurantProfile />
      <RestaurantProfile />
      <RestaurantProfile />
      <RestaurantProfile />
    </div>
    )
  }
}

export default RestaurantList;
