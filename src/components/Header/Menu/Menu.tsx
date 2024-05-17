import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <>
      <NavLink
        className="w-full md:w-auto text-center py-4 md:py-0 hover:font-[800] border-b border-black md:border-none "
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink
        className="w-full md:w-auto text-center py-4 md:py-0 hover:font-[800] border-b border-black md:border-none "
        to="/"
      >
        Fruits & légumes
      </NavLink>
      <NavLink
        className="w-full md:w-auto text-center py-4 md:py-0 hover:font-[800] border-b border-black md:border-none "
        to="/tutos"
      >
        Tutos
      </NavLink>
      <NavLink
        className="w-full md:w-auto  text-center  py-4 md:py-0 hover:font-[800]"
        to="/contact"
      >
        Contact
      </NavLink>
    </>
  );
}

export default Menu;
