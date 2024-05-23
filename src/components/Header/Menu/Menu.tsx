import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown } from 'react-feather';
import { useAppSelector } from '../../../hooks/redux';

interface MenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ isOpen, setIsOpen }: MenuProps) {
  const logged = useAppSelector((state) => state.user.logged);

  return (
    <>
      <NavLink
        className="w-full md:w-auto text-center py-4 md:py-0 hover:font-[800] border-b border-black md:border-none "
        to="/"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Accueil
      </NavLink>
      <div className="w-full md:w-auto group relative cursor-pointer py-2 border-b border-black md:border-none">
        <div className="menu-hover my-2 py-2 w-full md:w-auto text-center py-4 md:py-0 hover:font-[800] justify-center flex flex-row gap-2 ">
          Fruits & légumes
          <span>
            <ChevronDown />
          </span>
        </div>

        <div className="invisible absolute z-50 flex w-full flex-col bg-white py-2 px-4 group-hover:visible md:bg-white bg-[#f6d50e] items-center">
          <Link
            to="/fruits"
            className="my-2 block  hover:underline md:mx-2"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Fruits
          </Link>

          <Link
            to="/legumes"
            className="my-2 block py-1 hover:underline hover:underline md:mx-2"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Légumes
          </Link>
        </div>
      </div>

      <NavLink
        className="w-full md:w-auto text-center py-4 md:py-0 hover:font-[800] border-b border-black md:border-none "
        to="/tutos"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Tutos
      </NavLink>
      <NavLink
        className="w-full md:w-auto  text-center  py-4 md:py-0 hover:font-[800]"
        to="/contact"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Contact
      </NavLink>

      {logged && (
        <NavLink
          className="w-full md:w-auto text-center hover:font-[800] px-6 py-3 rounded-full bg-[#16A1AF] text-white focus:outline-none focus:ring-2 focus:ring-[#F6D50E] focus:ring-offset-2"
          to="/mon_jardin"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Mon Jardin
        </NavLink>
      )}
    </>
  );
}

export default Menu;
