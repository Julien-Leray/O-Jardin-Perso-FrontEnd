import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { fetchFruitDetails } from '../../../../store/thunks/productThunks';

function FruitDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { selectedFruit, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchFruitDetails(id));
    }
  }, [id, dispatch]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;
  if (!selectedFruit) return <div>Aucun fruit sélectionné.</div>;

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold">{selectedFruit.name}</h1>
      <p>{selectedFruit.description}</p>
      <img
        src={selectedFruit.picture}
        alt={selectedFruit.name}
        className="w-full max-w-sm"
      />
    </div>
  );
}

export default FruitDetail;
