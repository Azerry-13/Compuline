import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="container">
        <img src={logo} alt="Compuline logo" />
        <nav>
          <ul>
            <li className="small-text">
              <NavLink to="/home" onClick={handleScrollToTop}>
                Home
              </NavLink>
            </li>
            <li className="small-text">
              <NavLink to="/about" onClick={handleScrollToTop}>
                About us
              </NavLink>
            </li>
            <li className="small-text">
              <NavLink to="/products" onClick={handleScrollToTop}>
                Products
              </NavLink>
            </li>
            <li className="small-text">
              <NavLink to="/vendorspartners" onClick={handleScrollToTop}>
                Vendors and partners
              </NavLink>
            </li>
            <li className="small-text">
              <NavLink to="/contacts" onClick={handleScrollToTop}>
                Contacts
              </NavLink>
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
