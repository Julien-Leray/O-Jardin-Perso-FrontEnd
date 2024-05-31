import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import MaMeteo from './Meteo/Meteo';
import MesFavoris from './Favoris/MesFavoris';
import { Product } from '../../../@types/types';
import fetchUserData from '../../../store/thunks/myGardenThunks';

interface MonJardinProps {
  logged: boolean;
  allFavProducts: Product[];
}

function MonJardin({ logged, allFavProducts }: MonJardinProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const { userData } = useAppSelector((state) => state.myGarden);
  const loading = useAppSelector((state) => state.myGarden.loading);
  const error = useAppSelector((state) => state.myGarden.error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Bienvenue {userData.firstname}</h1>

      <Link
        to="/mon_jardin/potager-virtuel"
        className="text-blue-500 hover:text-blue-700"
      >
        Gérez votre jardin virtuel ici.
      </Link>

      <div className="flex   flex-col md:flex-row md:justify-between gap-4 -m-4 my-4 ">
        <div className="rounded-lg shadow-lg border border-gray-200 p-4 md:w-1/4">
          <h2 className="font-bold ">Mes alertes</h2>
          {/* <p>{dateOfDay} </p> */}
        </div>

        <MaMeteo userData={userData} logged={logged} />
      </div>
      <MesFavoris
        userData={userData}
        logged={logged}
        allFavProducts={allFavProducts}
      />
    </div>
  );
}

export default MonJardin;
