import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return <header>
    <div className="inner-content">
        <div className="left-side">
            <h2>Frete Grátis para todo o Brasil!</h2>
            <p>
                Produtos eletrônicos selecionados para seu bem estar e 
                da sua família. Desfrute de comprar on-line conosco.
            </p>
            <Link to="/products">
                <span>Ver Agora</span>
                <FontAwesomeIcon icon={faChevronRight}/>
            </Link>
        </div>
        <div className="left-side"></div>
    </div>    
  </header>;
  
}
