import React from 'react';
import Menu from './Menu';
import ConnexionBurger from '../ConnexionBtn/ConnexionBtnBurger';

function MenuBurger() {
  return (
    <nav className="absolute z-40 h-dvh w-full p-6 flex flex-col items-center bg-white text-xl md:hidden">
      <Menu />
      <ConnexionBurger />
    </nav>
  );
}

export default MenuBurger;
