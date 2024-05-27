import React from 'react';
import Menu from './Menu';

interface MenuNavProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuNav({ isOpen, setIsOpen }: MenuNavProps) {
  return (
    <nav className="hidden md:flex items-center md:justify-center md:flex-row md:gap-12 md:text-xl md:my-6 md:pt-6 border-t border-t-solid border-t-[#052018]">
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

export default MenuNav;
