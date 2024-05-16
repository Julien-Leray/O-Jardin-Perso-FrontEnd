import React from 'react';

function Connexion() {
  return (
    <div className="hidden md:block absolute  mt-4 top-2 right-2">
      <button
        className="px-6 py-3 rounded-full bg-[#F6D50E] hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#F6D50E] focus:ring-offset-2"
        type="submit"
      >
        Connexion
      </button>
    </div>
  );
}

export default Connexion;
