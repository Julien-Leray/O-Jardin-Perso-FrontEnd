import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMeteo = createAsyncThunk(
  'FETCH_METEO',
  async (cityName: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b6b0c8aca4ea0fe1bad01cea0f3eb091`
    //   `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=218f32cd39f9bdde590c689d89e8d6e4`
    //   `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=218f32cd39f9bdde590c689d89e8d6e4`
     );
    return {
      name: cityName,
      temp: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
    };
  }
);
