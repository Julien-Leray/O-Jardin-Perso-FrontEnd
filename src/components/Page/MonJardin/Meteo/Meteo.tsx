import React, { useEffect } from 'react';
import fetchMeteo from '../../../../store/thunks/meteoThunk';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import { User } from '../../../../@types/types';

interface MeteoProps {
  userData: User;
  logged: boolean;
}
function MaMeteo({ userData, logged }: MeteoProps) {
  const dispatch = useAppDispatch();

  const meteo = useAppSelector((state) => state.meteo);
  const cityName = userData.city;
console.log(meteo)

  useEffect(() => {
    if (cityName) {
      dispatch(fetchMeteo(cityName));
    }
  }, [dispatch, cityName]);

  return (
    <div className="rounded-lg shadow-lg border border-gray-200 p-4 md:w-3/4 bg-gray-200">
      {meteo && meteo.name ? (
        <div className=" ">
          <h2 className="font-bold text-center	">Météo à {meteo.name}</h2>
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
        <p>
          Veuillez renseigner un code postal pour afficher vos données météo !
        </p>
      )}
    </div>
  );
}

export default MaMeteo;
