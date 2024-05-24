import React from 'react';
import { Link } from 'react-router-dom';
import tutoriels from '../../../data/data';

function Tutoriels() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center font-bold text-3xl mb-6">Tutoriels</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tutoriels.map((tutoriel) => (
          <div key={tutoriel.id} className="bg-white p-4 shadow rounded">
            <img
              src={tutoriel.picture}
              alt={tutoriel.name}
              className="w-full h-64 object-cover rounded"
            />
            <div className="mt-4">
              <div className="font-semibold text-xl mb-2">{tutoriel.name}</div>
              <p className="text-gray-700 text-base">
                {tutoriel.description.substring(0, 100)}...
              </p>
              <Link
                to={`/tutos/${tutoriel.id}`}
                className="mt-3 mb-2 py-2 px-4 rounded flex justify-center w-full text-sm font-medium text-white bg-[#F5780A] rounded-full hover:bg-black focus:ring-1 focus:ring-[F6D50E]"
              >
                Lire la suite
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutoriels;
