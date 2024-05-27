import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchMeteo } from '../../../store/thunks/meteoThunk';

function MonJardin() {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const meteo = useAppSelector((state) => state.meteo);
  const cityName = user.city;

  useEffect(() => {
    if (cityName) {
      dispatch(fetchMeteo(cityName));
    }
  }, [dispatch, cityName]);

  return (
    <div>
      <h1>Bienvenue {user.firstname}</h1>
      <Link to="/mon_jardin/potager-virtuel" className="text-blue-500 hover:text-blue-700">
        Gérez votre jardin virtuel ici.
      </Link>
      {meteo && meteo.name ? (
        <div className="bg-gray-200 rounded-lg p-4 my-2 ">
          <h2 className="font-bold ">Météo à {meteo.name}</h2>
          <div className='flex flex-wrap justify-around'>
          {meteo.weatherForecast.map((dailyWeather) => (
            
            <div key={dailyWeather.date}>
              <p>{dailyWeather.date}</p>
              <p>{dailyWeather.temp}°C</p>
              <img src={`http://openweathermap.org/img/w/${dailyWeather.icon}.png`} alt="weather icon" />
            </div>
            
          ))}
          </div>

        </div>
      ) : (
        <p>Chargement des données météo...</p>
      )}
    </div>
  );
}

export default MonJardin;