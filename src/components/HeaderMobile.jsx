import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import BurgerMenu from "./BurgerMenu";

function HeaderMobile() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");

    if (isMenuActive) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isMenuActive]);

  return (
    <header className="header-mobile">
      <div className="container">
        <img src={logo} alt="Compuline logo" />
        <div
          className={`burger-menu ${isMenuActive ? "is-active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="top-line"></div>
          <div className="bottom-line"></div>
        </div>
      </div>
      {/* Передаем функцию для закрытия меню в BurgerMenu */}
      {isMenuActive && <BurgerMenu closeMenu={closeMenu} />}
    </header>
  );
}

export default HeaderMobile;
