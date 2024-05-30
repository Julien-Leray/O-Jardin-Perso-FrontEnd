import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { fetchFruitDetails } from '../../../../store/thunks/productThunks';


export  const months = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

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

    // .replace() : Change the {} with nothing
    const plantationDates = selectedFruit.plantation_date.replace(/[{}]/g, '');

    //.split() : split a string into an ordered list
    const monthIndices = plantationDates.split(',').map(Number);

    const harvestDates = selectedFruit.harvest_date.replace(/[{}]/g, '');
    const monthHarvest = harvestDates.split(',').map(Number);

    const plantationMonths = (index:number) => monthIndices.includes(index + 1);
    const harvestMonth = (index:number) => monthHarvest.includes(index + 1);

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

        <h2 className="pt-3 pb-2 font-bold">Périodes de plantation </h2>
  
        <div className="grid grid-cols-4 md:grid-cols-12 gap-1.5 md:gap-2 bg-white rounded p-2 text-black">
          {months.map((month, index) => (
            <div key={month} className="text-center text-xs font-semibold">
              {month}
              <div className={`h-8 ${plantationMonths(index) ? 'bg-[#F6D50E]' : 'bg-gray-300'}`}></div>
            </div>
          ))}
        </div>

        <h2 className="pt-3 pb-2 font-bold"> Période de récolte</h2>

        <div className="grid grid-cols-4 md:grid-cols-12 gap-1.5 md:gap-2 bg-white rounded p-2 text-black">
          {months.map((month, index) => (
            <div key={month} className="text-center text-xs font-semibold">
              {month}
              <div className={`h-8 ${harvestMonth(index) ? 'bg-[#F6D50E]' : 'bg-gray-300'}`}></div>
            </div>
          ))}
        </div>

       <h2 className="pt-2 font-bold">Conseils d'arrosage</h2>

          <p className="pt-2"> {selectedFruit.watering_frequency}</p>
        
      </div>
    </div>
  );
}

export default FruitDetail;
