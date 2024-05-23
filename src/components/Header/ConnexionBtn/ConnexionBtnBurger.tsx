import React from 'react';
import ConnexionBtn from './ConnexionBtn';

interface ConnexionBtnBurgerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ConnexionBtnBurger({ isOpen, setIsOpen }: ConnexionBtnBurgerProps) {
  return (
    <div className="md:hidden pt-6">
      <ConnexionBtn isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default ConnexionBtnBurger;
