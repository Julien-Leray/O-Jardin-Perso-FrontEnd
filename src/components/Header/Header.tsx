import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu as Burger } from 'react-feather';
import ConnexionDesktop from './ConnexionBtn/ConnexionBtnDesktop';
import MenuNav from './Menu/MenuNav';
import MenuBurger from './Menu/MenuBurger';

import logo from '../../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="relative mb-6	">
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
            <span className="absolute py-2 px-4 top-4 right-4 rounded-lg text-white bg-[#F6D50E]">
              <Burger size="60" />
            </span>
          ) : (
            <span className="absolute py-2 px-4 top-4 right-4">
              <Burger size="60" />
            </span>
          )}
        </button>
      </div>
      <NavLink className="" to="/">
        <img
          src={logo}
          className="w-1/2 mx-auto md:w-64 pt-6"
          alt="logo O'Jardin"
        />
      </NavLink>

      {isOpen ? <MenuBurger /> : ''}
      <MenuNav />
    </header>
  );
}

export default Header;
