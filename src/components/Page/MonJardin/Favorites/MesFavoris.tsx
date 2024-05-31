import React from 'react';
import { Heart, XCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { User, UserData } from '../../../../@types/types';
import {
  actionAddProductToFav,
  actionDeleteFav,
} from '../../../../store/thunks/favoritesThunks';
import actionGetDataUser from '../../../../store/thunks/myGardenThunks';

interface FavorisProps {
  userData: UserData;
  logged: boolean;
}
function MesFavoris({ userData, logged }: FavorisProps) {
  const { favLegumes, favFruits } = useAppSelector(
    (state) => state.myGarden.favProducts
  );

  const dispatch = useAppDispatch();

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
              {favFruits.map((fruit) => (
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
              {favLegumes.map((legume) => (
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
                        {!legume.isFav && (
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
                        )}
                        <button
                          type="button"
                          className=" mr-4 mt-4"
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(actionDeleteFav(legume.id));
                            event.preventDefault();

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
