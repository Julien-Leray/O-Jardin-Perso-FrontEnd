import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllTutorials } from '../../../store/thunks/tutorielsThunk';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Tutorial } from '../../../types/types';

interface Tutoprops {
  tutorials: Tutorial[];
}

function Tutoriels({ tutorials }: Tutoprops) {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.tutoriels.loading);
  const error = useAppSelector((state) => state.tutoriels.error);

  useEffect(() => {
    dispatch(fetchAllTutorials());
  }, [dispatch]);

  return (
    <div className="flex mx-auto flex-col my-6">
      <h2 className="text-xl text-center font-bold p-2">Tutoriels</h2>
      {loading && <p>Chargement...</p>}
      {error && <p>Erreur : {error}</p>}
      <div>
        <ul className="flex flex-wrap md:flex-row -m-4">
          {tutorials.map((tutoriel) => (
            <li key={tutoriel.id} className=" w-5/6 md:w-1/3 p-4">
              <div className="flex flex-col justify-normal flex-grow rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <Link to={`/tutos/${tutoriel.id}`}>
                  <img
                    src={`http://localhost:4000${tutoriel.picture}`}
                    alt={tutoriel.title}
                    className="w-full h-48 object-cover mx-auto"
                  />
                </Link>

                <div className="flex flex-col p-6">
                  <h3 className="font-bold text-center">{tutoriel.title}</h3>
                  <p className="italic text-sm my-4">
                    {tutoriel.article
                      ? tutoriel.article.substring(0, 100)
                      : 'Pas de description'}
                    ...
                  </p>
                  <Link
                    to={`/tutos/${tutoriel.id}`}
                    className="mx-auto py-4 px-6 text-white bg-[#F5780A] rounded-full hover:bg-black focus:ring-1 focus:ring-[#F6D50E]"
                  >
                    <button type="button">En savoir plus</button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tutoriels;
