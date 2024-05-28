import React from 'react';
import ConnexionBtn from './ConnexionBtn';

interface ConnexionBtnBurgerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ConnexionDesktop({ isOpen, setIsOpen }: ConnexionBtnBurgerProps) {
  return (
    <div className="hidden md:block absolute pt-6 top-2 right-2 py-2 px-4 top-4 right-4">
      <ConnexionBtn isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default ConnexionDesktop;
