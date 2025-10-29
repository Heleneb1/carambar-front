import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import candy from "../assets/realistic.png";

function NavBar() {
  return (
    <header className="navbar">
      <div className="brand">
        <NavLink to="/">
          <h1 className="title"> Carambar & Co </h1>
          <img className="caramb-logo" src={candy} alt="Carambar Logo" />
        </NavLink>
      </div>
      <nav className="links">
        <NavLink className="link" to="/">
          Accueil
        </NavLink>
        <NavLink className="link" to="/jokes">
          Blagues
        </NavLink>
        <NavLink className="link" to="/add">
          Ajouter une blague
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
