import React from "react";
import productImage1 from "../images/products-image-1.jpg";
import productImage2 from "../images/products-image-2.jpg";
import productImage3 from "../images/products-image-3.jpg";
import productImage4 from "../images/products-image-4.jpg";
import productImage5 from "../images/products-image-5.jpg";
import productImage6 from "../images/products-image-5-small.jpg";

function ProductsBlockContent() {
  const block = [
    { id: 1, image: productImage1, text: "Appliances and electronics" },
    { id: 2, image: productImage2, text: "Gamer products" },
    { id: 3, image: productImage3, text: "Software solutions" },
    {
      id: 4,
      image: productImage4,
      text: "Computers, peripherals and consumables",
    },
    { id: 5, image: productImage5, text: "Network and server equipment" },
    { id: 6, image: productImage6, text: "Network and server equipment" },
  ];
  return (
    <div className="products-content">
      {block.map((item) => (
        <div className="products-block" key={item.id}>
          <img src={item.image} alt="" />
          <p className="small-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsBlockContent;
