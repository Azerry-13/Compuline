import React from "react";
import { Link } from "react-router-dom";

function BurgerMenu({ closeMenu }) {
  return (
    <div className="burgerMenu">
      <div className="container">
        <nav>
          <ul>
            <li className="small-text">
              <Link to="/home" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="small-text">
              <Link to="/about" onClick={closeMenu}>
                About us
              </Link>
            </li>
            <li className="small-text">
              <Link to="/products" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li className="small-text">
              <Link to="/vendorspartners" onClick={closeMenu}>
                Vendors and partners
              </Link>
            </li>
            <li className="small-text">
              <Link to="/contacts" onClick={closeMenu}>
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
