import { 
  faBars,
  faSearch, 
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [show, setShow] = useState(false);

  return (
    <div className="nav">
    <div className="inner-content">
        <h1 className="logo">
        SHOP7<span>STORE</span>
        </h1>
        <nav className={`${show && "show"}`}>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/products">Produtos</Link>
            </li>
            <li>
            <Link to="/about">Quem Somos</Link>
            </li>
            <li>
            <Link to="/contact">Contato</Link>
            </li>
            <li>
            <Link to="/account">Meu Carrinho</Link>
            </li>
        </ul>
        </nav>
        <div className="navs-icon-container">
        <div className="search-input-container">
            <input type="search" placeholder="Procurar" />
            <FontAwesomeIcon icon={faSearch} />
        </div>
        <button className="shopping-cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="products-count">15</div>
        </button>
        <button className="menu-button"
        onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars}/>
        </button>
        </div>
    </div>
    </div>
    );
}
