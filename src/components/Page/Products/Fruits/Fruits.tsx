// Fruits.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchFruits } from '../../../../store/thunks/productThunks';

function Fruits() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { fruits, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchFruits());
  }, [dispatch]);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-3">Fruits</h1>
      {loading && <p>Chargement...</p>}
      {error && <p>Erreur : {error}</p>}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id} className="border-b border-gray-200 py-2">
            <button
              type="button"
              onClick={() => navigate(`/fruits/${fruit.id}`)}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              {fruit.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
