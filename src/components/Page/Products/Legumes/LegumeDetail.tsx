import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { fetchLegumeDetails } from '../../../../store/thunks/productThunks';

function LegumeDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { selectedLegume, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (id) dispatch(fetchLegumeDetails(id));
  }, [id, dispatch]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!selectedLegume) return <div>Aucun légume sélectionné.</div>;

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold">{selectedLegume.name}</h1>
      <p>{selectedLegume.description}</p>
      <img
        src={selectedLegume.picture}
        alt={selectedLegume.name}
        className="w-full max-w-sm"
      />
    </div>
  );
}

export default LegumeDetail;
