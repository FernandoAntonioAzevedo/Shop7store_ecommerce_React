import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="pager-inner-content content">
          <div className="download-options">
             <p>Baixo nosso Aplicativo Mobile</p>
             <p>Disponível para Android e IOS</p>
             <div>
               <img src="/images/app-store.png" alt="App Store download" />
               <img src="/images/play-store.png" alt="Play Store download" />
             </div>
          </div>
          <div className="logo.footer">
            <h1 className="logo">
              SHOP7<span>STORE</span>  
            </h1>
            <p>
                Produtos selecionados e de altíssima qualidade a pronta entrega.
            </p>
          </div>
          <div className="links">
            <h3>Links úteis:</h3>
            <ul>
              <li>
                <Link to="/">Cupons</Link>
                <Link to="/">Blog Post</Link>
                <Link to="/">políticas de Compra</Link>
                <Link to="/">Torne-se Afiliado</Link>
              </li>  
            </ul>
          </div>

          <hr/>

      </div>
  </footer>
  );      
}
