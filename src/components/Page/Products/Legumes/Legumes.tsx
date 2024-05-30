import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchLegumes } from '../../../../store/thunks/productThunks';

function Legumes() {
  const dispatch = useAppDispatch();
  const { legumes, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchLegumes());
  }, [dispatch]);

  return (
    <div className="flex mx-auto flex-col my-6">
      <h2 className="text-xl text-center font-bold p-2">Légumes</h2>
      {loading && <p className="text-center">Chargement...</p>}
      {error && <p className="text-red-600 text-center">Erreur : {error}</p>}
      <div className="">
        <ul className="flex flex-wrap md:flex-row -m-4">
          {legumes.map((legume) => (
            <li key={legume.id} className="w-5/6 md:w-1/3 p-4">
              <div className="flex flex-col flex-grow rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <Link to={`/legumes/${legume.id}`}>
                  <img
                    className="w-full h-48 object-cover mx-auto"
                    src={`${import.meta.env.VITE_API_URL}/${legume.picture}`}
                    alt={legume.name}
                  />
                </Link>
                <div className="flex flex-col p-6">
                  <h3 className="font-bold text-center mb-2">{legume.name}</h3>{' '}
                  <span className="italic text-center text-xs mb-2">
                    {legume.latin_name}
                  </span>
                  <p className="italic text-sm my-4">
                    {legume.description.slice(0, 100)}...
                  </p>
                  <Link
                    to={`/legumes/${legume.id}`}
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

export default Legumes;
