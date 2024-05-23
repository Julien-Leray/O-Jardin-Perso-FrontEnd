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
    <div className="container mx-auto mt-5 p-5 mb-5 bg-[#F6D50E]">
      <h1 className="text-2xl font-bold text-white text-center mb-5">Fruits</h1>
      {loading && <p className="text-center">Chargement...</p>}
      {error && <p className="text-red-600 text-center">Erreur : {error}</p>}
      <div className="grid grid-cols-3 gap-4">
        {fruits.map((fruit) => (
          <div
            key={fruit.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-[#16A1AF]"
          >
            <img
              className="w-full h-48 object-cover container mx-auto mt-5 mb-5 p-5"
              src={`http://localhost:4000/api${fruit.picture}`}
              alt={fruit.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-white text-center mb-2">{fruit.name}</div>
              <p className="text-gray-700 text-base">
                {fruit.description.slice(0, 100)}...
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <Link
                to={`/fruits/${fruit.id}`}
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

export default Fruits;
