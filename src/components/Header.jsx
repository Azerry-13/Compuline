import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-desktop">
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
              <Link to="/Compuline/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
