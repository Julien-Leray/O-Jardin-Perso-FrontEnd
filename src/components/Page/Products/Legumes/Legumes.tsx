import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchLegumes } from '../../../../store/thunks/productThunks'; // Mise à jour du chemin d'importation

function Legumes() {
  const dispatch = useAppDispatch();
  const { legumes, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchLegumes());
  }, [dispatch]);

  return (
    <div>
      <h1>Légumes</h1>
      {loading && <p>Chargement...</p>}
      {error && <p>Erreur: {error}</p>}
      <ul>
        {legumes.map((legume) => (
          <li key={legume.id}>
            {legume.name} - {legume.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Legumes;
