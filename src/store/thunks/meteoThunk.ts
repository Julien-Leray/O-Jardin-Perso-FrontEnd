import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

const fetchMeteo = createAsyncThunk('FETCH_METEO', async (cityName: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=218f32cd39f9bdde590c689d89e8d6e4`
  );

  // day's date
  const currentMoment = dayjs();

  const weatherDay = response.data.list.filter((weatherForecast: any) => {
    const forecastDate = dayjs(weatherForecast.dt_txt).startOf('day');
    return forecastDate.isSame(currentMoment, 'day');
  });

  const forecastForToday = weatherDay.reduce(
    (weathercurrent: any, weatherForecast: any) => {
      const forecastDate = dayjs(weatherForecast.dt_txt);
      if (
        !weathercurrent ||
        forecastDate.diff(currentMoment) <
          dayjs(weathercurrent.dt_txt).diff(currentMoment)
      ) {
        return weatherForecast;
      }
      return weathercurrent;
    },
    null
  );

  const forecastsForFourDays = response.data.list
    .filter((weatherForecast: any) => {
      const forecastDate = dayjs(weatherForecast.dt_txt).startOf('day');
      return (
        forecastDate.isAfter(currentMoment) &&
        weatherForecast.dt_txt.includes('12:00:00')
      );
    })
    .slice(0, 4);

  const forecasts = forecastForToday
    ? [forecastForToday, ...forecastsForFourDays]
    : forecastsForFourDays;

  return {
    name: response.data.city.name,
    weatherForecast: forecasts.map((weatherForecast: any) => ({
      // Format date with day.js
      date: dayjs(weatherForecast.dt_txt).locale('fr').format('dddd DD MMMM'),
      temp: Math.round(weatherForecast.main.temp),
      icon: weatherForecast.weather[0].icon,
    })),
  };
});
export default fetchMeteo;
