import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeteo } from '../../../store/thunks/meteoThunk';
import { useAppSelector } from '../../../hooks/redux';

function MonJardin() {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.myGarden.user);
  const { products } = useAppSelector((state) => state.myGarden);

  const meteo = useSelector((state) => state.meteo);
  const cityName = user.city;

  useEffect(() => {
    if (cityName) {
      dispatch(fetchMeteo(cityName));
    }
  }, [dispatch, cityName]);

  return (
    <div>
      <h1>Bienvenue dans votre jardin {user.firstname}</h1>

      <Link
        to="/mon_jardin/potager-virtuel"
        className="text-blue-500 hover:text-blue-700"
      >
        Gérez votre jardin virtuel ici.
      </Link>

      {meteo && meteo.name ? (
        <div className="bg-gray-200 rounded-lg p-4 my-2">
          <h2 className="font-bold  ">Météo à {meteo.name}</h2>
          <p>Température: {meteo.temp}°C</p>
          <img
            className=""
            src={`http://openweathermap.org/img/w/${meteo.icon}.png`}
            alt="weather icon"
          />
        </div>
      ) : (
        <p>Chargement des données météo...</p>
      )}
    </div>
  );
}

export default MonJardin;
