import React from "react";
import './Footer.css';

function Footer() {
  return (
<div className="footer-flex-around">
  <div className="footer-flex-column">
    <h2>Get To Know Us</h2>
      <a href="/">About Us</a>
      <a href="/">Our App</a>
      <a href="/">Promotions</a>
      <a href="/">Careers</a>
      <a href="/">Investor Relations</a>
  </div>
  <div className="footer-flex-column">
    <h2>Business Solutions</h2>
      <a href="/">Join Us</a>
      <a href="/">Drive With Us</a>
  </div>
    <div className="footer-flex-column">
       <h2>Useful Links</h2>
      <a href="/">Gift Cards</a>
      <a href="/">FAQ</a>
      <a href="/">Help</a>
  </div>
</div>
  )
}

export default Footer
