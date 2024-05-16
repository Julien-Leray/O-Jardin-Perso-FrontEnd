import React from 'react';
import Menu from './Menu';

function MenuNav() {
  return (
    <nav className="hidden md:flex items-center md:justify-center md:flex-row md:gap-10 md:text-2xl md:my-6">
      <Menu />
    </nav>
  );
}

export default MenuNav;
