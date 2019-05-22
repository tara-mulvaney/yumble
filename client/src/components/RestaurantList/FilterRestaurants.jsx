import React from "react";
import "./FilterRestaurants.css";
import Header from '../Header/Header'
import RestaurantProfile from "../../components/RestaurantProfile/RestaurantProfile";
import Footer from '../Footer/Footer'
import StarRating from "../../components/RestaurantList/StarRating";

function FilterRestaurants(props) {
  const {data,history,handleClick} = props
  return (
    <div>
      <Header/>
      <div className="list-body">
        <div className="list-main">
          <div>
            {data ? (
            data.map((restaurant,index) => {
              return (
                <RestaurantProfile
                  restaurant={restaurant}
                  index={index}
                  history={history}
                  handleClick={handleClick}
                />
              );
            })):null}
          </div>
          {/*<div className="list-filter">
            <h1>Filter</h1>
            <div className="list-flex">
              <p>Price</p>
              <StarRating />
              <button className="list-filter-price">$</button>
              <button className="list-filter-price">$$</button>
              <button className="list-filter-price">$$$</button>
            </div>
            <div className="list-flex">
              <p>Rating</p>
            </div>
            <div className="list-flex">
              <p>Est Time</p>
              <button className="list-delivery-time">30</button>
              <button className="list-delivery-time">45</button>
              <button className="list-delivery-time">60</button>
            </div>
            <div className="list-flex-around">
              <button>PICKUP</button>
              <button>DELIVERY</button>
            </div>
            <div className="list-flex-around">
              <p>Dietary Needs</p>
              <p> + </p>
            </div>
            <div className="list-flex-around">
              <p>Cuisine</p>
              <p> + </p>
            </div>
            <div className="list-flex-around">
              <button>
                <h1>Search</h1>
              </button>
            </div>
          </div>*/}
          <div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default FilterRestaurants;