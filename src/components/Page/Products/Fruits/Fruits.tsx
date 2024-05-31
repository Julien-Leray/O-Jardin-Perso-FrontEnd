import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, XCircle } from 'react-feather';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { Product } from '../../../../@types/types';

import {
  actionAddProductToFav,
  actionDeleteFav,
} from '../../../../store/thunks/favoritesThunks';
import slugify from '../../../../utils/utils';
import actionGetDataUser from '../../../../store/thunks/myGardenThunks';
import fetchAllProducts from '../../../../store/thunks/productThunks';
import products from '../../../../store/reducers/products';
// import findFavProduct from '../../../../store/selectors/favProducts';

interface FruitsProps {
  fruits: Product[];
  logged: boolean;
}

function Fruits({ logged, fruits }: FruitsProps) {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.products);
  const { favProducts } = useAppSelector((state) => state.myGarden);
  const [listeFav, setListeFav] = useState<boolean>(false);

  // const favFruitsId = favProducts.favFruits.map((favFruit) => favFruit.id);
  const checkIsFav = (fruitId: number) => {
    const isFruitFav = favProducts.favFruits.some(
      (favFruit) => favFruit.id === fruitId
    );
    console.log(isFruitFav);
    setListeFav(isFruitFav);
  };
  useEffect(() => {
    dispatch(actionGetDataUser);
  });

  return (
    <div className="flex mx-auto flex-col my-6">
      <h2 className="text-xl text-center font-bold p-2">Fruits</h2>
      {loading && <p className="text-center">Chargement...</p>}
      {error && <p className="text-red-600 text-center">Erreur : {error}</p>}
      <div>
        <ul className="flex flex-wrap md:flex-row -m-4 justify-stretch">
          {fruits.map((fruit) => (
            <li
              key={`fruits${fruit.id}`}
              className="w-5/6 md:w-1/3 p-4 mx-auto"
            >
              <div className="flex flex-col rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <Link to={`/fruits/${slugify(fruit.name)}`}>
                  <img
                    className="w-full h-48 object-cover mx-auto"
                    src={`${import.meta.env.VITE_API_URL}/${fruit.picture}`}
                    alt={fruit.name}
                  />
                </Link>
                <div className="flex flex-row justify-end">
                  {/* à mettre dans un composant : /* {logged && <Favorites logged={logged} productCat={legumes} />} */}

                  {logged && (
                    /* en cours pour améliorer l'ergonomie : /* {logged && <Favorites logged={logged} productCat={legumes} />} */

                    // <button
                    //   type="button"
                    //   className={`mr-4 mt-4 ${listeFav && 'bg-[#16A1AF]'}`}
                    //   onClick={(event) => {
                    //     event.preventDefault();
                    //     checkIsFav(fruit.id);
                    //     console.log(fruit.id);

                    //     console.log(listeFav);
                    //     if (!listeFav) {
                    //       dispatch(actionAddProductToFav(fruit.id));
                    //     } else {
                    //       dispatch(actionDeleteFav(fruit.id));
                    //     }
                    //     dispatch(actionGetDataUser());
                    //   }}
                    // >
                    //   <Heart size="35" className="rounded-full p-2" />
                    // </button>

                    /* {logged && <Favorites logged={logged} productCat={legumes} />} */

                    <div className="flex flex-row justify-end">
                      <button
                        type="button"
                        className="  mr-4 mt-4"
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(actionAddProductToFav(fruit.id));
                        }}
                      >
                        <Heart
                          size="35"
                          className={`rounded-full p-2 ${
                            fruit.isFav && 'bg-[#16A1AF] text-white'
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
                            fruit.isFav && 'bg-[#16A1AF] text-white'
                          }`}
                        />
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex flex-col p-6 ">
                  <h3 className="font-bold text-center mb-2">{fruit.name}</h3>
                  <span className="italic text-center text-xs mb-2">
                    {fruit.latin_name}
                  </span>
                  <p className="italic text-sm my-4">
                    {fruit.description.slice(0, 100)}...
                  </p>
                  <Link
                    to={`/fruits/${slugify(fruit.name)}`}
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

export default Fruits;
