import React from "react";
import Formsubmition from "./Formsubmition";

function Form() {
  return (
    <div className="form" id="form">
      <div className="container">
        <h2>Become a partner</h2>
        <p className="small-text">
          Fill out the form, and Compuline specialists will contact you to clarify the details and conclude a contract.
        </p>
        <Formsubmition />
      </div>
    </div>
  );
}

export default Form;
