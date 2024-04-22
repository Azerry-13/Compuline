import React from "react";
import { Link } from "react-router-dom";

function BurgerMenu({ closeMenu }) {
  return (
    <div className="burgerMenu">
      <div className="container">
        <nav>
          <ul>
            <li className="small-text">
              <Link to="/Compuline/home" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="small-text">
              <Link to="/Compuline/about" onClick={closeMenu}>
                About us
              </Link>
            </li>
            <li className="small-text">
              <Link to="/Compuline/products" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li className="small-text">
              <Link to="/Compuline/vendorspartners" onClick={closeMenu}>
                Vendors and partners
              </Link>
            </li>
            <li className="small-text">
              <Link to="/Compuline/contacts" onClick={closeMenu}>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;
