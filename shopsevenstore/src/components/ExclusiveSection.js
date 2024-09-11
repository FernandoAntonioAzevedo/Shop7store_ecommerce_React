import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
         <div className="content">
           <div className="left-side">
             <h2>Smart Watch MI IV</h2>
              <p>
                O smart watch MI IV tem uma tela AMODEL 39% maior que o 
                MI III, tela digital e com brilho ajustável. Maximizando 
                sua experiência no uso diário. 
              </p>
              <Link to="/products" className="see-more-btn">
                 <span>Ver Agora</span>
                 <FontAwesomeIcon icon={faChevronRight}/>
              </Link>
            </div>
            <div className="right-side">
              <img src="/images/exclusive.png" alt="imagem do smart watch MI IV" />
          </div>
        </div>            
      </div>
    </div>
  );  
}
