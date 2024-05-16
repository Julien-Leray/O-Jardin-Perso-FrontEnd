import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// import { Menu } from 'react-feather';
import Connexion from '../Connexion/Connexion';
import MenuNav from '../Menu/Menu';
import logo from '../../assets/logo.png';

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      <Connexion />
      <div className="burger md:hidden absolute mt-4 top-2 right-2">
        <button
          className=""
          type="button"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <span>{isVisible ? 'MenuBurger' : 'MenuBurger'}</span>
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </div>
      <NavLink className="" to="/">
        <img src={logo} className="w-1/2 mx-auto md:w-64" alt="logo O'Jardin" />
      </NavLink>
      <hr className="border-[#052018] my-4" />
      <MenuNav />
    </div>
  );
}

export default Header;
