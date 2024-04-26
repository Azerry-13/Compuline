import React, { useState } from "react";

function MainBannerButton(props) {
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

  return (
    <div className="banner">
      <div className="container">
        <div className="bannerText">
          <h1>{props.bannerHeading}</h1>
          <p className="small-text">{props.bannerText}</p>
          <button
            style={{
              color: isMouseOver ? "#0076C9" : "#0096ff",
              backgroundColor: isMouseOver ? "#f7f7f7" : "#ffffff",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="button-text white"
            onClick={scrollToForm}
          >
            Become a partner
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainBannerButton;
