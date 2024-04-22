import React from "react";
import MainBannerButton from "./components/Mainbannerbuttonwhite";
import AboutBlock from "./components/AboutBlock";

function About() {
  return (
    <>
      <div className="about">
        <MainBannerButton
          bannerHeading="About us"
          bannerText={
            <span
              dangerouslySetInnerHTML={{
                __html:
                  "Compuline is an international distributor of consumer electronics and home appliances offering a wide selection of products and services.<br/>We cooperate with leading manufacturers all across the world.",
              }}
            />
          }
        />
        <AboutBlock />
      </div>
    </>
  );
}

export default About;
