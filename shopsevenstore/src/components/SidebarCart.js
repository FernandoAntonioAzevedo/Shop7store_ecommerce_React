import { faMoneyBill, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SidebarProduct from "./SidebarProduct";
import { Link } from "react-router-dom";

export default function SidebarCart() {
  return (
    <aside className="sidebar-cart">
        <div className="top">
            <h3>Seu Carrinho</h3>
            <button>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
        <div className="sidebar-products-list">
          <SidebarProduct />
          <SidebarProduct />
          <SidebarProduct />
        </div>

        <div className="total-container">
           <b>Total:</b> R$ 000.00 
        </div>

        <Link to="/cart/checkout" className="btn-icon">
                <span>Pagar Agora</span>
                <FontAwesomeIcon icon={faMoneyBill}/>
        </Link>

        <i>Seu carrinho está vazio</i>
    </aside>
  );  
}
