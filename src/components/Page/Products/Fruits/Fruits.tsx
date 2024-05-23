import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchFruits } from '../../../../store/thunks/productThunks';

function Fruits() {
  const dispatch = useAppDispatch();
  const { fruits, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchFruits());
  }, [dispatch]);

  return (
    <div className="flex mx-auto flex-col my-6">
      <h2 className="text-xl text-center font-bold p-2">Fruits</h2>
      {loading && <p className="text-center">Chargement...</p>}
      {error && <p className="text-red-600 text-center">Erreur : {error}</p>}
      <div className="">
        <ul className="flex flex-wrap md:flex-row -m-4">
          {fruits.map((fruit) => (
            <li key={fruit.id} className="mx-auto w-5/6 md:w-1/3 p-4">
              <div className="flex flex-col flex-grow rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <img
                  className="w-full h-48 object-cover mx-auto"
                  src={`http://localhost:4000/${fruit.picture}`}
                  alt={fruit.name}
                />
                <div className="flex flex-col p-6">
                  <h3 className="font-bold text-center mb-2">{fruit.name}</h3>
                  <p className="italic text-sm my-4">
                    {fruit.description.slice(0, 100)}...
                  </p>
                  <Link
                    to={`/fruits/${fruit.id}`}
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

export default Fruits;
