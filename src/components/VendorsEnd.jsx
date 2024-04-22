import React, { useState } from "react";
import vendorsimage2 from "../images/vendors-image-2.jpg";

function VendorEnd() {
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
    <>
      <div className="container">
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
        <img src={vendorsimage2} alt="" />

        <div className="vendorEnd-text">
          <p className="body-text">
            Thanks to well-thought-out logistics, strategic planning, good
            knowledge of the market, and a professional team, we have ensured
            reliable, clear, and harmonious work of all the details within the
            large Compuline mechanism.
          </p>
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
    </>
  );
}

export default VendorEnd;
