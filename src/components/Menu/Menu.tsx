import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuNav() {
  return (
    <nav className="hidden md:flex items-center gap-10 justify-center text my-4 text-lg">
      {/* <div className="lg:hidden flex flex-col"> */}
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
      {/* </div> */}
    </nav>
  );
}

export default MenuNav;
