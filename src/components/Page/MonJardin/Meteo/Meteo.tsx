import React, { useEffect } from 'react';
import { fetchMeteo } from '../../../../store/thunks/meteoThunk';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { User } from '../../../../@types/types';

interface MeteoProps {
  user: User;
}
function MaMeteo({ user }: MeteoProps) {
  const dispatch = useAppDispatch();

  const meteo = useAppSelector((state) => state.meteo);
  const cityName = user.city;

  useEffect(() => {
    if (cityName) {
      dispatch(fetchMeteo(cityName));
    }
  }, [dispatch, cityName]);

  return (
    <div>
      {meteo && meteo.name ? (
        <div className="bg-gray-200 rounded-lg p-4 my-2 ">
          <h2 className="font-bold ">Météo à {meteo.name}</h2>
          <div className="flex flex-wrap justify-around">
            {meteo.weatherForecast.map((dailyWeather) => (
              <div key={dailyWeather.date}>
                <p>{dailyWeather.date}</p>
                <p>{dailyWeather.temp}°C</p>
                <img
                  src={`http://openweathermap.org/img/w/${dailyWeather.icon}.png`}
                  alt="weather icon"
                />
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

export default MaMeteo;
