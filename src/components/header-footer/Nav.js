import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/accueil" end className="nav__link" activeclassname="active">
        Accueil
      </NavLink>

      <NavLink to="/about" end className="nav__link" activeclassname="active">
        A Propos
      </NavLink>
    </nav>
  );
}

export default Nav;
