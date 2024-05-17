import React from 'react';
import { NavLink } from 'react-router-dom';

function ConnexionBtn() {
  return (
    <NavLink to="/connexion">
      <button
        className="px-6 py-3 rounded-full bg-[#F6D50E] hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#F6D50E] focus:ring-offset-2"
        type="submit"
      >
        Connexion / Inscription
      </button>
    </NavLink>
  );
}

export default ConnexionBtn;
