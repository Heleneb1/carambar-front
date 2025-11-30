import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import candy from "../assets/realistic.png";

import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="brand">
        <NavLink to="/">
          {/* TODO: Revoir Aff */}
          <h1 className="title">Carambar & Co</h1>
        </NavLink>
        <img
          className="caramb-logo"
          src={candy}
          loading="lazy"
          alt="logo carambar"
        />

        <div className="burger-icon" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav className={`links ${isOpen ? "open" : ""}`}>
        <NavLink className="link" to="/" onClick={() => setIsOpen(false)}>
          Accueil
        </NavLink>
        <NavLink className="link" to="/jokes" onClick={() => setIsOpen(false)}>
          Blagues
        </NavLink>
        <NavLink className="link" to="/add" onClick={() => setIsOpen(false)}>
          Ajouter une blague
        </NavLink>
      </nav>
    </header>
  );
}
export default NavBar;
