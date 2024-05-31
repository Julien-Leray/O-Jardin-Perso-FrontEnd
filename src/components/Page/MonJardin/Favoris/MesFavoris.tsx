import React from 'react';
import { Heart, XCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { Product, User } from '../../../../@types/types';
import {
  fetchAddProductToFav,
  fetchDeleteFav,
} from '../../../../store/thunks/favoritesThunks';
import actionGetDataUser from '../../../../store/thunks/myGardenThunks';
import BtnSupprFavoris from './BtnSupprFavoris';

interface FavorisProps {
  allFavProducts: Product[];
}
function MesFavoris({ allFavProducts }: FavorisProps) {
  const dispatch = useAppDispatch();

  const sortedFavProducts = {
    favFruits: [] as Product[],
    favLegumes: [] as Product[],
  };

  allFavProducts.forEach((favProduct: Product) => {
    if (favProduct.category_id === 1) {
      sortedFavProducts.favFruits.push(favProduct);
    } else {
      sortedFavProducts.favLegumes.push(favProduct);
    }
  });

  return (
    <>
      <div>
        <h2 className="text-xl text-center font-bold p-2">Mes favoris</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6">
        <div className="w-full py-4">
          <h2 className="text-xl text-center font-bold p-2">Fruits </h2>
          <div className="flex flex-col rounded-lg overflow-hidden shadow-lg border border-gray-200 p-2">
            <ul className="flex flex-wrap justify-around rounded-lg">
              {sortedFavProducts.favFruits.map((fruit) => (
                <li
                  className="mx-auto w-5/6 md:w-1/2 p-4"
                  key={`fruit${fruit.id}`}
                >
                  <Link to={`/fruits/${fruit.id}`}>
                    <div className="flex flex-col flex-grow">
                      <img
                        src={`http://localhost:4000${fruit.picture}`}
                        alt={fruit.name}
                        className="w-full h-32 object-cover mx-auto rounded-t-lg"
                      />
                      <div className="flex flex-row justify-end">
                        <BtnSupprFavoris
                          allFavProducts={allFavProducts}
                          product={fruit}
                        />
                      </div>
                      <h3 className="font-bold text-center my-2">
                        {fruit.name}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full py-4">
          <h2 className="text-xl text-center font-bold p-2">Légumes </h2>
          <div className="flex flex-col rounded-lg overflow-hidden shadow-lg border border-gray-200 p-2">
            <ul className="flex flex-wrap justify-around rounded-lg">
              {sortedFavProducts.favLegumes.map((legume) => (
                <li
                  className="mx-auto w-5/6 md:w-1/2 p-4"
                  key={`legume${legume.id}`}
                >
                  <Link to={`/legume/${legume.id}`}>
                    <div className="flex flex-col flex-grow">
                      <img
                        src={`http://localhost:4000${legume.picture}`}
                        alt={legume.name}
                        className="w-full h-32 object-cover mx-auto rounded-t-lg"
                      />
                      {legume.isFav}
                      <div className="flex flex-row justify-end">
                        <BtnSupprFavoris
                          allFavProducts={allFavProducts}
                          product={legume}
                        />
                      </div>
                      <h3 className="font-bold text-center my-2">
                        {legume.name}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MesFavoris;
