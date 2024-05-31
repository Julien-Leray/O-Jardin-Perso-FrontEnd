import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, XCircle } from 'react-feather';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { Product } from '../../../../@types/types';
import {
  actionAddProductToFav,
  actionDeleteFav,
} from '../../../../store/thunks/favoritesThunks';
import Favorites from '../AddFavorites';
import slugify from '../../../../utils/utils';
import actionGetDataUser from '../../../../store/thunks/myGardenThunks';

interface FruitsProps {
  legumes: Product[];
  logged: boolean;
}

function Legumes({ logged, legumes }: FruitsProps) {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.products);

  return (
    <div className="flex mx-auto flex-col my-6">
      <h2 className="text-xl text-center font-bold p-2">Légumes</h2>
      {loading && <p className="text-center">Chargement...</p>}
      {error && <p className="text-red-600 text-center">Erreur : {error}</p>}
      <div>
        <ul className="flex flex-wrap md:flex-row -m-4 justify-stretch">
          {legumes.map((legume) => (
            <li key={legume.id} className="w-5/6 md:w-1/3 p-4 mx-auto">
              <div className="flex flex-col rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <Link to={`/legumes/${slugify(legume.name)}`}>
                  <img
                    className="w-full h-48 object-cover mx-auto"
                    src={`http://localhost:4000/${legume.picture}`}
                    alt={legume.name}
                  />
                </Link>
                {logged && (
                  <div className="flex flex-row justify-end">
                    <button
                      type="button"
                      className="  mr-4 mt-4"
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(actionAddProductToFav(legume.id));
                      }}
                    >
                      <Heart
                        size="35"
                        className={`rounded-full p-2 ${
                          legume.isFav && 'bg-[#16A1AF] text-white'
                        }`}
                      />
                    </button>
                    <button
                      type="button"
                      className=" mr-4 mt-4"
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(actionDeleteFav(fruit.id));
                        dispatch(actionGetDataUser());
                      }}
                    >
                      <XCircle
                        size="35"
                        className={`rounded-full p-2 ${
                          legume.isFav && 'bg-[#16A1AF] text-white'
                        }`}
                      />
                    </button>
                  </div>
                )}

                <div className="flex flex-col p-6 ">
                  <h3 className="font-bold text-center mb-2">{legume.name}</h3>
                  <span className="italic text-center text-xs mb-2">
                    {legume.latin_name}
                  </span>
                  <p className="italic text-sm my-4">
                    {legume.description.slice(0, 100)}...
                  </p>
                  <Link
                    to={`/legumes/${slugify(legume.name)}`}
                    className="mx-auto py-4 px-6 text-white bg-[#F5780A] rounded-full hover:bg-black focus:ring-1 focus:ring-[#F6D50E]"
                  >
                    <button type="button">En savoir plus</button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Legumes;
