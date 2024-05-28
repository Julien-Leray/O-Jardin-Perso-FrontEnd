import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMeteo } from '../../../store/thunks/meteoThunk';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

function MonJardin() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.myGarden.user);
  const { products } = useAppSelector((state) => state.myGarden);

  const meteo = useAppSelector((state) => state.meteo);
  const cityName = user.city;

  useEffect(() => {
    if (cityName) {
      dispatch(fetchMeteo(cityName));
    }
  }, [dispatch, cityName]);

    // dayjs.locale('fr');
    // const dateOfDay = dayjs().format('dddd DD MMMM')

  return (
    <div>
      <h1 className='flex justify-center m-2'>Bienvenue {user.firstname}</h1>

      <Link
        to="/mon_jardin/potager-virtuel"
        className="text-blue-500 hover:text-blue-700"
      >
        Gérez votre jardin virtuel ici.
      </Link>

      <div className='flex flex-wrap flex-col md:flex-row md:justify-around'>

        <div className="rounded-lg shadow-lg border border-gray-200 m-1 p-4 md:my-2 md:w-1/4">

            <h2 className="font-bold ">Mes alertes</h2>
            {/* <p>{dateOfDay} </p> */}
            <p>Arroser la laitue</p>

        </div>

        {meteo && meteo.name ? (

          <div className="rounded-lg m-1 shadow-lg border border-gray-200 md:w-5/5 md:p-2 md:my-2">
            <h2 className="font-bold ml-2">Météo à {meteo.name}</h2>
              <div className='flex flex-wrap justify-around'>
              {meteo.weatherForecast.map((dailyWeather) => (
                
                <div className="rounded-lg p-1 flex flex-col items-center" key={dailyWeather.date}>
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
    </div>
  );
}

export default MonJardin;