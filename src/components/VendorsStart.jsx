import React from "react";
import vendorsimage1 from "../images/vendors-image-1.jpg";

function vendorStart() {
  return (
    <>
      <div className="background-upper">
        <div className="container">
          <div className="vendorStart-text">
            <h1>Vendors and partners</h1>
            <p className="small-text">
              Compuline's reputation enables the company to build strong and
              reliable relationships with major manufacturers and ensure quality
              products to customers.
            </p>
          </div>
          <img src={vendorsimage1} alt="" />
        </div>
      </div>
    </>
  );
}

export default vendorStart;
