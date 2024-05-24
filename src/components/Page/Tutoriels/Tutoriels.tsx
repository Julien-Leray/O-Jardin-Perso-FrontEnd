import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllTutorials } from '../../../store/thunks/tutorielsThunk';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

function Tutoriels() {
  const dispatch = useAppDispatch();
  const { tutorials } = useAppSelector((state) => state.tutoriels);
  const loading = useAppSelector((state) => state.tutoriels.loading);
  const error = useAppSelector((state) => state.tutoriels.error);

  useEffect(() => {
    dispatch(fetchAllTutorials());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center font-bold text-3xl mb-6">Tutoriels</div>
      {loading && <p>Chargement...</p>}
      {error && <p>Erreur : {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tutorials.map((tutoriel) => (
          <div key={tutoriel.id} className="bg-white p-4 shadow rounded">
            <img
              src={`http://localhost:4000${tutoriel.picture}`}
              alt={tutoriel.title}
              className="w-full h-64 object-cover rounded"
            />
            <div className="mt-4">
              <div className="font-semibold text-xl mb-2">{tutoriel.title}</div>
              <p className="text-gray-700 text-base">
                {tutoriel.article
                  ? tutoriel.article.substring(0, 100)
                  : 'Pas de description'}
                ...
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
