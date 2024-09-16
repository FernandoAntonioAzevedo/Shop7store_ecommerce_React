import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SidebarProduct() {
  return (
    <div className="sidebar-product">
        <div className="left-side">
        <button className="remove-product-btn">
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="details">
            <h4>Combo Gamer Meetion</h4>
            <p>R$ 174.92</p>
            <input type="number"
            name="quantity" min={1} max={100} />
            <p className="price-sum">
                <b>Soma:</b> R$ 000.00
            </p>
        </div>
        </div>
        
        <div className="right-side">
            <img src="/images/products/product-4.png" alt="imagem produto 4" />
        </div>
    </div>
  );
}
