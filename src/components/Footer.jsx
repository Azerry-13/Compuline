import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <img src={logo} alt="Compuline logo" />
        <nav>
          <ul>
          <li className="small-text">
              <Link to="/home">Home</Link>
            </li>
            <li className="small-text">
              <Link to="/about">About us</Link>
            </li>
            <li className="small-text">
              <Link to="/products">Products</Link>
            </li>
            <li className="small-text">
              <Link to="/vendorspartners">Vendors and partners</Link>
            </li>
            <li className="small-text">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <hr />
      </div>
      <p className="small-text">© 2024, Compuline</p>
    </footer>
  );
}

export default Footer;
