import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-desktop">
      <div className="container">
        <Link to="/home">
          <img src={logo} alt="Compuline logo" />
        </Link>
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
    </header>
  );
}

export default Header;
