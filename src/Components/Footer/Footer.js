import React from "react";

import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import whatsapp from "../Images/whatsapp.png";
import twitter from "../Images/twitter.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="newsletter">
        <div className="logo">Stride</div>
        <div className="newsletter-text">
          <h2>Stay In Touch</h2>
          <p>
            Stay in touch to get special offers, free giveaways <br /> and once
            in a lifetime deals
          </p>
          <input type="email" placeholder="✉ Enter your email" />
        </div>
      </div>
      <div className="links">
        <p>
          {" "}
          <a href="/">Terms & Conditions</a>
        </p>
        <p>
          <a href="/">Privacy Policy</a>
        </p>
        <div className="socials">
          <p>
            <img src={facebook} alt="facebook" />
          </p>
          <p>
            <a href="/">
              <img src={instagram} alt="facebook" />
            </a>
          </p>
          <p>
            <a href="/">
              <img src={whatsapp} alt="facebook" />
            </a>
          </p>
          <p>
            <a href="/">
              <img src={twitter} alt="facebook" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
