import arrow from "../images/arrow.svg";
import React, { useState } from "react";

function Headline(props) {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function scrollToForm() {
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  const buttons = document.querySelectorAll("button.arrow-link");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.textContent === "Go to catalog") {
        window.location.replace("/Compuline/products");
      } else scrollToForm();
    });
  });

  return (
    <div className="container">
      <div className="heading-link">
        <h2>{props.heading}</h2>
        <button
          style={{
            color: isMouseOver ? "#0096ff" : "#8AA4B0",
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="small-text arrow-link"
          onClick={scrollToForm}
        >
          {props.button}
          <div className="arrow">
            <img src={arrow} alt="arrow button pointing right" />
          </div>
        </button>
      </div>
      <p className="body-text">
        {props.paragraph}
        <button
          style={{
            color: isMouseOver ? "#0096ff" : "#8AA4B0",
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="small-text arrow-link"
          onClick={scrollToForm}
        >
          {props.button}
          <div className="arrow">
            <img src={arrow} alt="arrow button pointing right" />
          </div>
        </button>
      </p>
    </div>
  );
}

export default Headline;
