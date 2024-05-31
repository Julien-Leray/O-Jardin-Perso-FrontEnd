import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import MaMeteo from './Meteo/Meteo';
import MesFavoris from './Favorites/MesFavoris';
import actionGetDataUser from '../../../store/thunks/myGardenThunks';

interface MonJardinProps {
  logged: boolean;
}

function MonJardin({ logged }: MonJardinProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionGetDataUser());
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
      <MaMeteo userData={userData} logged={logged} />
      <MesFavoris userData={userData} logged={logged} />
    </div>
  );
}

export default MonJardin;
