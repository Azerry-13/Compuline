import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  const handleScrollToTop = (event) => {
    const { target } = event;
    if (target.getAttribute("data-scroll-top") === "true") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer>
      <div className="container">
        <NavLink to="/home" onClick={handleScrollToTop}>
          <img
            src={logo}
            alt="Compuline logo"
            onClick={handleScrollToTop}
            data-scroll-top="true"
          />
        </NavLink>
        <nav>
          <ul>
            <li className="small-text">
              <NavLink
                to="/home"
                onClick={handleScrollToTop}
                data-scroll-top="true"
              >
                Home
              </NavLink>
            </li>
            <li className="small-text">
              <NavLink
                to="/about"
                onClick={handleScrollToTop}
                data-scroll-top="true"
              >
                About us
              </NavLink>
            </li>
            <li className="small-text">
              <NavLink
                to="/products"
                onClick={handleScrollToTop}
                data-scroll-top="true"
              >
                Products
              </NavLink>
            </li>
            <li className="small-text">
              <NavLink
                to="/vendorspartners"
                onClick={handleScrollToTop}
                data-scroll-top="true"
              >
                Vendors and partners
              </NavLink>
            </li>
            <li className="small-text">
              <NavLink
                to="/contacts"
                onClick={handleScrollToTop}
                data-scroll-top="true"
              >
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
