import React from "react";
import "./cart.css";

function Cart() {
  return (
    <div>
      <h1 className="cart-banner">Bill</h1>
      <div className="main-cart-box">
        <ul className="pick-deliv">
          <li>
            <input type="radio" id="pickup" name="pickup" />
            <label for="pickup">PICK UP</label>
          </li>
          <li>
            <input type="radio" id="delivery" name="delivery" />
            <label for="delivery">Delivery</label>
          </li>
        </ul>
      </div>
      <div className="cart-box">
        <form>
          <h3>DELIVERY TIME</h3>
          <select>
            <option value="30">30 min</option>
            <option value="45">45 min</option>
            <option value="60">60 min</option>
          </select>
        </form>
        <h3>PRICE</h3>
        <p>$1.50</p>
      </div>
      <div className="cart-box">
        <h3>FOOD ITEMS</h3>
        <div className="cart-box">
          <p>Cheese Croissant</p>
          <p>$17.15</p>
        </div>
      </div>
      <div className="cart-box">
        <h3>YUMBLE FEE</h3>
        <p>$1.20</p>
      </div>
      <div className="cart-box">
        <h3>DELIVERY TIP</h3>
        <ul className="delivery-tip">
          <li>
            <input type="radio" id="a15" name="amount" />
            <label for="a15">15%</label>
          </li>
          <li>
            <input type="radio" id="a20" name="amount" />
            <label for="a20">20%</label>
          </li>
          <li>
            <input type="radio" id="a25" name="amount" />
            <label for="a25">25%</label>
          </li>
          <li>
            <input type="radio" id="a0" name="amount" />
            <label for="a0">Add Later</label>
          </li>
          <li>
            <input type="radio" id="other" name="amount" />
            <label for="other">other:</label>
          </li>
          <li>
            <input type="text" id="otherAmount" name="numAmount" />
          </li>
        </ul>
      </div>
      <div>
        <h2>Total: $23.95</h2>
        <button className="pay-button">Pay Now</button>
      </div>
    </div>
  );
}

export default Cart;

