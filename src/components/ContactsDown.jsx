import React from "react";
import icon1 from "../images/contact-icon-1.jpg";
import icon2 from "../images/contact-icon-2.jpg";

const address = [
  {
    id: 1,
    image: icon1,
    text: "UNIT E, 26/F, CNT TOWER, 338 HENNESSY ROAD, WANCHAI, HONG KONG",
  },
  { id: 2, image: icon2, text: "info@сompuline.com" },
];

function ContactsDown() {
  return (
    <div className="contactsDown">
      <div className="container">
        {address.map((item) => (
          <div className="address" key={item.id}>
            <img src={item.image} alt="" />
            <p className="body-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactsDown;
