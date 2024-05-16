import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu as Burger } from 'react-feather';
import ConnexionDesktop from './Connexion/ConnexionDesktop';
import MenuNav from './Menu/MenuNav';
import MenuBurger from './Menu/MenuBurger';

import logo from '../../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="relative">
      <ConnexionDesktop />
      <div className="md:hidden absolute w-full">
        <button
          className="rounded-full w-5/6"
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <span className="absolute px-4 py-3 top-4 right-4 rounded-lg text-white bg-[#F6D50E]">
              <Burger size="40" />
            </span>
          ) : (
            <span className="absolute px-6 py-3 top-4 right-4  ">
              <Burger size="40" />
            </span>
          )}
        </button>
      </div>
      <NavLink className="" to="/">
        <img src={logo} className="w-1/2 mx-auto md:w-64" alt="logo O'Jardin" />
      </NavLink>
      <hr className="border-[#052018] my-4" />
      {isOpen ? <MenuBurger /> : ''}
      <MenuNav />
    </div>
  );
}

export default Header;
