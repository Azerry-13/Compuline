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
              <Link to="/Compuline/home">Home</Link>
            </li>
            <li className="small-text">
              <Link to="/Compuline/about">About us</Link>
            </li>
            <li className="small-text">
              <Link to="/Compuline/products">Products</Link>
            </li>
            <li className="small-text">
              <Link to="/Compuline/vendorspartners">Vendors and partners</Link>
            </li>
            <li className="small-text">
              <Link to="google.com">Contacts</Link>
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
