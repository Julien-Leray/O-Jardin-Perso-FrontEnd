import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchLegumes } from '../../../../store/thunks/productThunks';

function Legumes() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { legumes, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchLegumes());
  }, [dispatch]);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold">Légumes</h1>
      {loading && <p>Chargement...</p>}
      {error && <p>Erreur : {error}</p>}
      <ul>
        {legumes.map((legume) => (
          <li key={legume.id} className="border-b border-gray-200 py-2">
            <button
              type="button"
              onClick={() => navigate(`/legumes/${legume.id}`)}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              {legume.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Legumes;
