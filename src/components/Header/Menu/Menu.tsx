import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';

function Menu() {
  const logged = useAppSelector((state) => state.user.logged);

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
      {logged && (
        <NavLink
          className="w-full md:w-auto text-center hover:font-[800] px-6 py-3 rounded-full bg-[#16A1AF] text-white focus:outline-none focus:ring-2 focus:ring-[#F6D50E] focus:ring-offset-2"
          to="/mon_jardin"
        >
          Mon Jardin
        </NavLink>
      )}
    </>
  );
}

export default Menu;
