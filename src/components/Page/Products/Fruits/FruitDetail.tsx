import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { fetchFruitDetails } from '../../../../store/thunks/productThunks';

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

  const imageUrl = `http://localhost:4000/${selectedFruit.picture}`;

    const plantationDates = selectedFruit.plantation_date.replace(/[{}]/g, '');
    const monthIndices = plantationDates.split(',').map(Number);

    const recoltDates = selectedFruit.harvest_date.replace(/[{}]/g, '');
    const monthrecolt = recoltDates.split(',').map(Number);

    const months = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];

    const plantationMonths = monthIndices.map(monthIndex => months[monthIndex - 1]);
    const recoltMonth =monthrecolt.map(recoltIndex =>months[recoltIndex - 1]);

  return (
    <div className="container mx-auto mt-5 mb-5 p-5 rounded-lg shadow-lg bg-[#16A1AF]">
      <div className="text-white text-center">
        <h1 className="text-3xl font-bold mb-1">{selectedFruit.name}</h1>
        <p className='italic mb-3'>Nom Latin : {selectedFruit.latin_name}</p>
        <img
          src={imageUrl}
          alt={selectedFruit.name}
          className="mx-auto w-full max-w-md rounded-lg shadow-lg"
        />

         <h2 className='pt-4 font-bold'>Information sur le produit</h2>

        <p className="mt-4 text-justify">{selectedFruit.description}</p>

        <h2 className="pt-2 font-bold">Périodes de plantation </h2>
          <p className="pb-1">{plantationMonths.join(', ')}</p>

        <h2 className="pt-2 font-bold"> Période de récolte</h2>
        <p className="pb-1 ">{recoltMonth.join(', ')}</p>

       <h2 className="pt-2 font-bold">Conseils d'arrosage</h2>

          <p> {selectedFruit.watering_frequency}</p>
        
      </div>
    </div>
  );
}

export default FruitDetail;
