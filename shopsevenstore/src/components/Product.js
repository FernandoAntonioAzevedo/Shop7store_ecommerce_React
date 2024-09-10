import React from "react";

export default function Product
({id, image, name, rate, price}) {

  return (
    <div className="product">
        <img src={image} alt={name} />
        <p className="name">{name}</p>
        <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
        <p className="price"><span>R$</span> {price}</p>
    </div>    
  );
}
