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
    document.body.classList.remove("not-found-page");
    window.location.replace("/Compuline/#/home");
  };
  return (
    <>
      <main className="not-found">
        <div className="container">
          <h1>404</h1>
          <p className="body-text">Page not found</p>

          <button
            style={{
              color: isMouseOver ? "#0076C9" : "#0096ff",
              backgroundColor: isMouseOver ? "#f7f7f7" : "#ffffff",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="button-text white"
            onClick={handleClick}
          >
            Go to the main page
          </button>
        </div>
      </main>
    </>
  );
}

export default NotFound;
