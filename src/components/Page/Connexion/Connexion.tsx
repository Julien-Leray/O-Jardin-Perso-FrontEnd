import React from 'react';
import { User, Lock } from 'react-feather';
import { NavLink } from 'react-router-dom';

function Connexion() {
  return (
    <div className="flex justify-center rounded-lg ">
      <div className="w-5/6 md:w-3/5 shadow-3xl ">
        <form className="p-12 md:p-12">
          <div className="flex items-center mb-6 md:mb-8 b">
            <User className="absolute ml-3 " />
            <input
              type="text"
              id="username"
              className="bg-white text-gray-900 border-1 border-black text-sm rounded-full focus:ring-[#F6D50E] w-full ps-12 p-4 border border-black"
              placeholder="Identifiant"
            />
          </div>
          <div className="flex items-center mb-6 md:mb-8">
            <Lock className="absolute ml-3" />
            <input
              type="password"
              id="password"
              className="bg-white text-gray-900 border-1 border-black text-sm rounded-full focus:ring-[#F6D50E] w-full ps-12 p-4 border border-black"
              placeholder="Mot de passe"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full text-800 bg-[#F6D50E] hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#F6D50E] focus:ring-offset-2 mb-6 md:mb-8 b"
          >
            Continuer
          </button>
          <NavLink to="/inscription">
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full text-800 bg-[#F6D50E] hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#F6D50E] focus:ring-offset-2"
            >
              S&apos;inscrire
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
