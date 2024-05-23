import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { fetchLegumeDetails } from '../../../../store/thunks/productThunks';

function LegumeDetail() {
  const { nomLegume } = useParams();
  const dispatch = useAppDispatch();
  const { selectedLegume, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (nomLegume) {
      dispatch(fetchLegumeDetails(nomLegume));
    }
  }, [nomLegume, dispatch]);

  if (loading) return <div className="text-center text-lg">Chargement...</div>;
  if (error)
    return (
      <div className="text-center text-red-600 text-lg">Erreur : {error}</div>
    );
  if (!selectedLegume)
    return <div className="text-center text-lg">Aucun légume sélectionné.</div>;

  const imageUrl = `http://localhost:4000/api${selectedLegume.picture}`;

  return (
    <div className="container mx-auto mt-5 mb-5 p-5 rounded-lg shadow-lg bg-[#16A1AF]">
      <div className="text-white text-center">
        <h1 className="text-3xl font-bold mb-3">{selectedLegume.name}</h1>
        <img
          src={imageUrl}
          alt={selectedLegume.name}
          className="mx-auto w-full max-w-md rounded-lg shadow-lg"
        />
        <p className="mt-4">{selectedLegume.description}</p>
      </div>
    </div>
  );
}

export default LegumeDetail;
