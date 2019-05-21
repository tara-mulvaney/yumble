import React from "react";
import "./FilterRestaurants.css";

import RestaurantProfile from "../../components/RestaurantProfile/RestaurantProfile";
// import StarRating from "../../components/RestaurantList/StarRating";

function FilterRestaurants() {
  return (
    <main>
      <div>
        <div className="search-restaurants">
          <input type="text" name="search-restaurants" placeholder="Search restaurants" />
        </div>
        <RestaurantProfile />
        <RestaurantProfile />
        <RestaurantProfile />
        <RestaurantProfile />
        <RestaurantProfile />
        <RestaurantProfile />
      </div>
      <div className="filter">
        <h1>Filter</h1>
        <div className="flex">
          <p>Price</p>
          {/* <StarRating /> */}
          <button className="filter-price">$</button>
          <button className="filter-price">$$</button>
          <button className="filter-price">$$$</button>
        </div>
        <div className="flex">
          <p>Rating</p>
        </div>
        <div className="flex">
          <p>Est Time</p>
          <button className="delivery-time">30</button>
          <button className="delivery-time">45</button>
          <button className="delivery-time">60</button>
        </div>
        <div className="flex-around">
          <button>PICKUP</button>
          <button>DELIVERY</button>
        </div>
        <div className="flex-around">
          <p>Dietary Needs</p>
          <p> + </p>
        </div>
        <div className="flex-around">
          <p>Cuisine</p>
          <p> + </p>
        </div>
        <div className="flex-around">
          <button>
            <h1>Search</h1>
          </button>
        </div>
      </div>
    </main>
  );
}

export default FilterRestaurants;
