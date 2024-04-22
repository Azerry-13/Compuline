import React, { useState } from "react";

function MainBannerButton(props) {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  const handleClick = () => {
    window.location.replace("/home#form");
  };

  return (
    <div className="banner">
      <div className="container">
        <div className="bannerText">
          <h1>{props.bannerHeading}</h1>
          <p className="small-text">{props.bannerText}</p>
          <button
            style={{
              backgroundColor: isMouseOver ? "#0076C9" : "#0096ff",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="button-text white"
            onClick={handleClick}
          >
            Become a partner
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainBannerButton;
