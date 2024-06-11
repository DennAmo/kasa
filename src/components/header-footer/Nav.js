import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/accueil" end className="nav__link" >
        Accueil
      </NavLink>

      <NavLink to="/about" end className="nav__link" >
        A Propos
      </NavLink>
    </nav>
  );
}

export default Nav;
