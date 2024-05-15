import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav className="flex items-center gap-10 justify-center text my-4 text-lg">
      <NavLink className="hover:font-[800]" to="/">
        Accueil
      </NavLink>

      <NavLink className="hover:font-[800]" to="/">
        Fruits & légumes
      </NavLink>

      <NavLink className="hover:font-[800]" to="/">
        Tutos
      </NavLink>

      <NavLink className="hover:font-[800]" to="/">
        Contact
      </NavLink>
    </nav>
  );
}

export default Menu;
