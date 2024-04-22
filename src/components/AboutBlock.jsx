import arrow from "../images/arrow.svg";
import React, { useState } from "react";
import aboutImage1 from "../images/about-image-1.jpg";
import aboutImage2 from "../images/about-image-2.jpg";
import aboutImage3 from "../images/about-image-3.jpg";
import aboutImage4 from "../images/about-image-4.jpg";

function AboutBlock() {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  const aboutblock = [
    {
      id: 1,
      image: aboutImage1,
      h2: "",
      text: "Here you will find everything you need to establish an effective and convenient working environment and expand your business and production. We work with high-quality products and provide flexible conditions and prices.",
      buttonText: "Become a partner",
    },
    {
      id: 2,
      image: aboutImage2,
      h2: "Team",
      text: "We employ certified professionals who create conditions for the prosperity of partners and customers.",
    },
    {
      id: 3,
      image: aboutImage3,
      h2: "Mission",
      text: "We strive to help our partners achieve the best business results by offering quality products, continuous support, and a tailored approach.",
    },
    {
      id: 4,
      image: aboutImage4,
      h2: "Wide Range",
      text: "We offer a wide range of products from the world's leading manufacturers of machinery and electronics. And we are constantly expanding our portfolio to offer you the most modern and best solutions.",
      buttonText: "Go to catalog",
    },
  ];

  const handleClick = () => {
    window.location.replace("/Compuline/#/home#form");
  };

  return (
    <div className="container">
      <div className="about-content">
        {aboutblock.map((item) => (
          <div className="about-block" key={item.id}>
            <img src={item.image} alt="" />
            <div className="about-block-text">
              <h2>{item.h2}</h2>
              <p className="body-text">{item.text}</p>
              <button
                style={{
                  color: isMouseOver ? "#0096ff" : "#8AA4B0",
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="small-text arrow-link"
                onClick={(e) => {
                  if (item.buttonText === "Go to catalog") {
                    window.location.replace("#/products");
                  } else {
                    handleClick();
                  }
                }}
              >
                {item.buttonText}
                <div className="arrow">
                  <img src={arrow} alt="arrow button pointing right" />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutBlock;
