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
      <header class="banner" />
      <div class="box-1">
        <div class="profile">
          <h1>Maison Kayser</h1>
        </div>
        <div class="flex-around">
          <img src={starRating} alt="" />
        </div>
        <div class="flex">
          <p> <img src={toast} alt="" /> </p>
          <p> <img src={cake} alt="" /> </p>
          <p> <img src={donut} alt="" /> </p>
          <p> <img src={crepe} alt="" /> </p>
          <p> <img src={mille} alt="" /> </p>
        </div>
        <div class="flex">
          <p>
            {" "}
            $8
            <button> + Add </button>
          </p>
          <p>
            {" "}
            $8
            <button> + Add </button>
          </p>
          <p>
            {" "}
            $8
            <button> + Add </button>
          </p>
          <p>
            {" "}
            $8
            <button> + Add </button>
          </p>
          <p>
            {" "}
            $8
            <button> + Add </button>
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
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
          </div>
          <div class="flex-column">
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
          </div>
          <div class="flex-column">
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
          </div>
          <div class="flex-column">
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
          </div>
        </div>
      </div>
      <div class="box-1">
        <h2>Mains</h2>
        <div class="flex-around">
          <div class="flex-column">
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
          </div>
          <div class="flex-column">
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
          </div>
          <div class="flex-column">
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
          </div>
          <div class="flex-column">
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
            <p>$8 <button> + Add </button></p>
          </div>
        </div>
      </div>
      <div class="box-1">
        <h2>Desserts</h2>
        <div class="flex-around">
          <div class="flex-column">
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
          </div>
          <div class="flex-column">
            <p>$8 +</p>
            <p>$8 +</p>
            <p>$8 +</p>
            <p>$8 +</p>
          </div>
          <div class="flex-column">
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
          </div>
          <div class="flex-column">
            <p>$8 +</p>
            <p>$8 +</p>
            <p>$8 +</p>
            <p>$8 +</p>
          </div>
        </div>
      </div>
      <div class="box-1">
        <h2>Mains</h2>
        <div class="flex-around">
          <div class="flex-column">
            <p>Menu Item</p>
          </div>
          <div class="flex-column">
            <p>$8 +</p>
          </div>
          <div class="flex-column">
            <p>Menu Item</p>
          </div>
          <div class="flex-column">
            <p>$8 +</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
