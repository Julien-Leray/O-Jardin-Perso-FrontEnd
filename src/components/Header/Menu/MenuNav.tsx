import React from 'react';
import Menu from './Menu';

function MenuNav() {
  return (
    <nav className="hidden md:flex items-center md:justify-center md:flex-row md:gap-12 md:text-xl md:my-6 md:pt-6 border-t border-t-solid border-t-[#052018]">
      <Menu />
    </nav>
  );
}

export default MenuNav;
