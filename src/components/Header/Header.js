import React from 'react';
import {Link} from "react-router-dom";
import imagem from "../../logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            <img src={imagem} className="image"/>
          </Link>
        </h1>
      </div>
      <div className="header-links">
      <ul>
          <li>
            <Link to="/">
             Home
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart" className="cart">
            Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header