import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Formsubmition() {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleClick() {
    alert("Form submitted");
    setTimeout(() => {
      window.location.reload();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, 2000);
  }

  const [state, handleSubmit] = useForm("mpzvklvz");
  return (
    <form onSubmit={handleSubmit}>
      <label className="small-text">First and last name</label>
      <input
        className="body-text"
        placeholder="John Smith"
        id="text"
        type="text"
        name="text"
      />
      <label className="small-text">Phone *</label>
      <input
        id="number"
        type="number"
        name="number"
        className="body-text"
        placeholder="+7 (ххх) хх - хх - хх"
      />
      <label htmlFor="email" className="small-text">
        E-mail
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="body-text"
        placeholder="vasha@pochta.tut"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <div className="submit-button">
        <button
          style={{
            backgroundColor: isMouseOver ? "#0076C9" : "#0096ff",
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          type="submit"
          className="button-text"
          onClick={handleClick}
        >
          Submit
        </button>
        <p className="small-text">
          I give my consent for the processing of personal data.
        </p>
      </div>
    </form>
  );
}

export default Formsubmition;
