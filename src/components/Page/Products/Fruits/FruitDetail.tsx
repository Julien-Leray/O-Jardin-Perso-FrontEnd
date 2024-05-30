import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { fetchFruitDetails } from '../../../../store/thunks/productThunks';

// const ImageURL = process.env.REACT_APP_API_URL;

function FruitDetail() {
  const { nomFruit } = useParams();
  const dispatch = useAppDispatch();
  const { selectedFruit, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (nomFruit) {
      dispatch(fetchFruitDetails(nomFruit));
    }
  }, [nomFruit, dispatch]);

  if (loading) return <div className="text-center text-lg">Chargement...</div>;
  if (error)
    return (
      <div className="text-center text-red-600 text-lg">Erreur : {error}</div>
    );
  if (!selectedFruit)
    return <div className="text-center text-lg">Aucun fruit sélectionné.</div>;

  const imageUrl = `${import.meta.env.VITE_API_URL}/${selectedFruit.picture}`;
  return (
    <div className="container mx-auto mt-5 mb-5 p-5 rounded-lg shadow-lg bg-[#16A1AF]">
      <div className="text-white text-center">
        <h1 className="text-3xl font-bold mb-3">{selectedFruit.name}</h1>
        <img
          src={imageUrl}
          alt={selectedFruit.name}
          className="mx-auto w-full max-w-md rounded-lg shadow-lg"
        />
        <p className="mt-4">{selectedFruit.description}</p>
      </div>
    </div>
  );
}

export default FruitDetail;
