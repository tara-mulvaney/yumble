import React from "react";
import "./RestaurantList.css";

function FilterRestaurants() {
  return (
    <main>
      <div className="restaurant-list">
        <div className="search" />
      </div>
      <div className="filter">
        <h1>Filter</h1>
        <div className="flex">
          <p>Price</p>

          <p>$</p>
          <p>$$</p>
          <p>$$$</p>
        </div>
        <div className="flex">
          <p>Rating</p>
          <p id="star-five"></p>
        </div>
        <div className="flex">
          <p>Est Time</p>
          <p>30</p>
          <p>45</p>
          <p>60</p>
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
