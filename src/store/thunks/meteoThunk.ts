
//     const dailyWeatherForecast = response.data.list.filter((weatherForecast: any) =>
//       weatherForecast.dt_txt.includes("12:00:00")
//     ).slice(0, 5);

//     return {
//       name: response.data.city.name,
//       weatherForecast: dailyWeatherForecast.map((weatherForecast: any) => ({
//         //format date with day.js
//         date: dayjs(weatherForecast.dt_txt).locale('fr').format('dddd DD MMMM'),
//         temp: Math.round(weatherForecast.main.temp),
//         icon: weatherForecast.weather[0].icon
//       }))
//     };
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

export const fetchMeteo = createAsyncThunk(
  'FETCH_METEO',
  async (cityName: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=218f32cd39f9bdde590c689d89e8d6e4`
    );

    //day's date 
    const currentMoment = dayjs();

    //Start of Time : today 
    const weatherDay = currentMoment.startOf('day');

    const forecastForDay = response.data.list.reduce((weathercurrent: any, weatherForecast: any) => {
      
      const forecastDate = dayjs(weatherForecast.dt_txt);
      if (forecastDate.isSame(weatherDay, 'day')) {
        if (!weathercurrent || Math.abs(forecastDate.diff(currentMoment)) < Math.abs(dayjs(weathercurrent.dt_txt).diff(currentMoment))) {
          return weatherForecast;
        }
      }
      return weathercurrent;
    }, null);

    const forecastsForFourDays = response.data.list.filter((weatherForecast: any) =>
      dayjs(weatherForecast.dt_txt).isAfter(weatherDay) &&
      weatherForecast.dt_txt.includes("12:00:00")
    ).slice(0, 4);

  
    const combinedForecasts = [forecastForDay, ...forecastsForFourDays];

    return {
      name: response.data.city.name,
      weatherForecast: combinedForecasts.map((weatherForecast: any) => ({
        // Format date with day.js
        date: dayjs(weatherForecast.dt_txt).locale('fr').format('dddd DD MMMM'),
        temp: Math.round(weatherForecast.main.temp),
        icon: weatherForecast.weather[0].icon
      }))
    };
  }
);
