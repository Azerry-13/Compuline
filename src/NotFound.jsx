import React, { useState } from "react";

function NotFound() {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  const handleClick = () => {
    window.location.replace("/Compuline/home");
  };
  return (
    <>
      <div className="notfound">
        <div className="container">
          <h1>404</h1>
          <p className="small-text">Page not found</p>
          <button
            style={{
              color: isMouseOver ? "#0076C9" : "#0096ff",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="button-text white"
            onClick={handleClick}
          >
            Go to the main page
          </button>
        </div>
      </div>
    </>
  );
}

export default NotFound;
