import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import findProduct from '../../../../store/selectors/products';
import slugify from '../../../../utils/utils';

export const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

function LegumeDetail() {
  const params = useParams();
  const legume = useAppSelector((state) =>
    findProduct(state.products.allProducts, slugify(params.name))
  );

  const { loading, error } = useAppSelector((state) => state.products);

  if (loading) return <div className="text-center text-lg">Chargement...</div>;
  if (error)
    return (
      <div className="text-center text-red-600 text-lg">Erreur : {error}</div>
    );
  if (!legume)
    return <div className="text-center text-lg">Aucun légume sélectionné.</div>;

  const imageUrl = `${import.meta.env.VITE_API_URL}/${legume.picture}`;

  // .replace() : Change the {} with nothing
  const plantationDates = legume.plantation_date.replace(/[{}]/g, '');

  // .split() : split a string into an ordered list
  const monthIndices = plantationDates.split(',').map(Number);

  const harvestDates = legume.harvest_date.replace(/[{}]/g, '');
  const monthHarvest = harvestDates.split(',').map(Number);

  const plantationMonths = (index: number) => monthIndices.includes(index + 1);
  const harvestMonth = (index: number) => monthHarvest.includes(index + 1);

  return (
    <div className="mx-auto w-full mt-5 mb-5 p-5 rounded-lg shadow-lg ">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-1">{legume.name}</h1>
        <p className="italic mb-3">Nom Latin : {legume.latin_name}</p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 items-start">
        <img
          src={imageUrl}
          alt={legume.name}
          className="w-full md:w-1/2 mx-auto rounded-lg shadow-lg md:my-4 mt-4"
        />
        <p className="w-full md:w-1/2 my-4">{legume.description}</p>
      </div>
      <div className="bg-[#16A1AF] rounded-lg p-4 pb-6">
        <h2 className="pb-2 font-bold text-center">Périodes de plantation </h2>

        <div className=" grid grid-cols-4 md:grid-cols-12 gap-1.5 md:gap-2 bg-white rounded p-2 text-black">
          {months.map((month, index) => (
            <div key={month} className="text-center text-xs font-semibold">
              {month}
              <div
                className={`h-8 ${
                  plantationMonths(index) ? 'bg-[#F6D50E]' : 'bg-gray-300'
                }`}
              />
            </div>
          ))}
        </div>

        <h2 className="pt-3 pb-2 font-bold text-center"> Période de récolte</h2>

        <div className="grid grid-cols-4 md:grid-cols-12 gap-1.5 md:gap-2 bg-white rounded p-2 text-black">
          {months.map((month, index) => (
            <div key={month} className="text-center text-xs font-semibold">
              {month}
              <div
                className={`h-8 ${
                  harvestMonth(index) ? 'bg-[#F6D50E]' : 'bg-gray-300'
                }`}
              />
            </div>
          ))}
        </div>

        <h2 className="pt-2 font-bold text-center">Conseils d'arrosage</h2>

        <p className="pt-2 text-center"> {legume.watering_frequency}</p>
      </div>
    </div>
  );
}

export default LegumeDetail;
