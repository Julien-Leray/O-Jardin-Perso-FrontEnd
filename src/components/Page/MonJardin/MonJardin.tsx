import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import MaMeteo from './Meteo/Meteo';
import MesFavoris from './Favorites/MesFavoris';

function MonJardin() {
  const user = useAppSelector((state) => state.myGarden.user);
  console.log(user);
  return (
    <div>
      <h1>Bienvenue {user.firstname}</h1>

      <Link
        to="/mon_jardin/potager-virtuel"
        className="text-blue-500 hover:text-blue-700"
      >
        Gérez votre jardin virtuel ici.
      </Link>
      <MaMeteo user={user} />
      <MesFavoris user={user} />
    </div>
  );
}

export default MonJardin;
