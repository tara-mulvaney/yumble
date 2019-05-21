import React from "react";
import "./Menu.css";

import starRating from "../../assets/star-rating.png";
import toast from "../../assets/torrrzt.png";
import cake from "../../assets/cayke.png";
import donut from "../../assets/jamdonut.png";
import crepe from "../../assets/crepe.png";
import mille from "../../assets/millefeuille.png";

function Menu() {
  return (
    <div>
      <header className="banner" />
      <div className="box-1">
        <div className="profile">
          <h1>Maison Kayser</h1>
        </div>
        <div className="flex-around">
          <img src={starRating} alt="" className="star-rating-image" />
        </div>
        <div className="flex">
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
        <div className="flex-menu-buttons">
          <p>
            {" "}
            $8
            <button className="quick-add-button"> + Add </button>
          </p>
          <p>
            {" "}
            $8
            <button className="quick-add-button"> + Add </button>
          </p>
          <p>
            {" "}
            $8
            <button className="quick-add-button"> + Add </button>
          </p>
          <p>
            {" "}
            $8
            <button className="quick-add-button"> + Add </button>
          </p>
          <p>
            {" "}
            $8
            <button className="quick-add-button"> + Add </button>
          </p>
        </div>
        <div class="flex">
          <p>Avocado Toast</p>
          <p>Chocolate Cake</p>
          <p>Jam Donut</p>
          <p>Butter Crepe</p>
          <p>Millefeuille</p>
        </div>
      </div>
      <div class="box-1">
        <h2>Pastries</h2>
        <div class="flex-around">
          <div class="flex-column">
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
          </div>
          <div class="flex-column">
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
          </div>
          <div class="flex-column">
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
          </div>
          <div class="flex-column">
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
          </div>
        </div>
      </div>
      <div class="box-1">
        <h2>Mains</h2>
        <div class="flex-around">
          <div class="flex-column">
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
          </div>
          <div class="flex-column">
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
          </div>
          <div class="flex-column">
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
          </div>
          <div class="flex-column">
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
          </div>
        </div>
      </div>
      <div class="box-1">
        <h2>Desserts</h2>
        <div class="flex-around">
          <div class="flex-column">
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
          </div>
          <div class="flex-column">
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
          </div>
          <div class="flex-column">
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
            <p className="menu-item-spacing">Menu Item</p>
          </div>
          <div class="flex-column">
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
            <p>
              $8 <button className="menu-item-button"> + </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
