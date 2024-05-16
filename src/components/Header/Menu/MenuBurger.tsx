import React from 'react';
import Menu from './Menu';
import ConnexionBurger from '../Connexion/ConnexionBurger';

function MenuBurger() {
  return (
    <nav className="absolute h-dvh w-full p-6 flex flex-col items-center bg-white text-xl md:hidden">
      <Menu />
      <ConnexionBurger />
    </nav>
  );
}

export default MenuBurger;
