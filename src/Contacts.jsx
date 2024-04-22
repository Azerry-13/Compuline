import React from "react";
import ContactsUpper from "./components/ContactsUpper";
import ContactsDown from "./components/ContactsDown";
import ContactsImage from "./components/ContactsImage";

function Contacts() {
  return (
    <>
      <ContactsUpper />
      <ContactsImage />
      <ContactsDown />
    </>
  );
}

export default Contacts;
