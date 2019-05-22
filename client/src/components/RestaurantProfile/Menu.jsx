import React from "react";
import "./Menu.css";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import starRating from "../../assets/star-rating.png";
import toast from "../../assets/torrrzt.png";
import cake from "../../assets/cayke.png";
import donut from "../../assets/jamdonut.png";
import crepe from "../../assets/crepe.png";
import mille from "../../assets/millefeuille.png";

function Menu(props) {
  const {index,cuisines,addToCart,displayTotalPrice,history,data} = props
  console.log(data[index].name);
  return (
    <div>
      <Header/>
      <div className="menu-box-1">
      <button onClick={()=>history.push("/restaurantlist")}>&#60;</button>
        <div className="menu-profile">
          <h1>{data[index].name}</h1>
        </div>
        <div className="menu-flex-around">
          <img src={starRating} alt="" className="menu-star-rating-image" />
        </div>
        <div className="menu-flex">
          <p>
            {" "}
            <img src={toast} alt="" className="menu-image" />{" "}
          </p>
          <p>
            {" "}
            <img src={cake} alt="" className="menu-image" />{" "}
          </p>
          <p>
            {" "}
            <img src={donut} alt="" className="menu-image" />{" "}
          </p>
          <p>
            {" "}
            <img src={crepe} alt="" className="menu-image" />{" "}
          </p>
          <p>
            {" "}
            <img src={mille} alt="" className="menu-image" />{" "}
          </p>
        </div>
        <div className="menu-flex-menu-buttons">
          <p>
            {" "}
            $8
            <button className="menu-quick-add-button"> + Add </button>
          </p>
          <p>
            {" "}
            $8
            <button className="menu-quick-add-button"> + Add </button>
          </p>
          <p>
            {" "}
            $8
            <button className="menu-quick-add-button"> + Add </button>
          </p>
          <p>
            {" "}
            $8
            <button className="menu-quick-add-button"> + Add </button>
          </p>
          <p>
            {" "}
            $8
            <button className="menu-quick-add-button"> + Add </button>
          </p>
        </div>
        <div className="menu-flex">
          <p>Avocado Toast</p>
          <p>Chocolate Cake</p>
          <p>Jam Donut</p>
          <p>Butter Crepe</p>
          <p>Millefeuille</p>
        </div>
      </div>
      <div className="menu-box-1">
        <h2>Main</h2>
        <div className="menu-flex-around">
          <div className="menu-flex-column">
          {cuisines ? (
            cuisines.map((cuisine,index) => {
              return (
                <div><p className="menu-item-spacing">{cuisine.food}</p>
                <p>
                  ${cuisine.price} <button className="menu-item-button" onClick={(e)=>addToCart(e,index)}> + </button>
                </p></div>
              );
            })):null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
