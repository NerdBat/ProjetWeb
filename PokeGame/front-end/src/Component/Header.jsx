import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/Header.css"; //importer le fichier CSS de style

export default function Header(){
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink exact to="/" className="nav__link" activeClassName="nav__link--active">
              Accueil
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink  to="/game" className="nav__link" activeClassName="nav__link--active">
              Game
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/chat" className="nav__link" activeClassName="nav__link--active">
              Chat
            </NavLink>
          </li>
        <li className="nav__item">
            <NavLink to="/user" className="nav__link" activeClassName="nav__link--active">
              Utilisateur
            </NavLink>
          </li>
          </ul>
      </nav>
    </header>
  );
};



