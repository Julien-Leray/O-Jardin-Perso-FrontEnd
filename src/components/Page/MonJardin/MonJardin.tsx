import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import MaMeteo from './Meteo/Meteo';
import MesFavoris from './Favorites/MesFavoris';
import actionGetDataUser from '../../../store/thunks/myGardenThunks';

function MonJardin() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionGetDataUser());
  }, []);

  const { userData } = useAppSelector((state) => state.myGarden);
  console.log('MonJardin', userData);
  return (
    <div>
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          dispatch(actionGetDataUser());
        }}
      >
        X
      </button>
      <h1>Bienvenue {userData.firstname}</h1>

      <Link
        to="/mon_jardin/potager-virtuel"
        className="text-blue-500 hover:text-blue-700"
      >
        Gérez votre jardin virtuel ici.
      </Link>
      <MaMeteo userData={userData} />
      {/* <MesFavoris user={user} /> */}
    </div>
  );
}

export default MonJardin;
