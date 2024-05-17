import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <>
      <NavLink
        className="mb-4 hover:font-[800] after:border-b-1 after:border-black"
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink className="mb-4 hover:font-[800]" to="/">
        Fruits & légumes
      </NavLink>
      <NavLink className="mb-4 hover:font-[800]" to="/tutos">
        Tutos
      </NavLink>
      <NavLink className="mb-4 hover:font-[800]" to="/contact">
        Contact
      </NavLink>
    </>
  );
}

export default Menu;
