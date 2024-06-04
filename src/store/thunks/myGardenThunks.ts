import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';
import { User } from 'react-feather';

export const fetchUserData = createAsyncThunk('user/GET_DATA', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/me/garden');

    const userData = response.data[0].result.user;
    const allFavProducts = response.data[0].result.products;

    return { userData, allFavProducts };
  } catch (error) {
    return thunkAPI.rejectWithValue('Erreur de connexion');
  }
});

export const updateAlert = createAsyncThunk('user/UPDATE_ALERT', async (userData: {forecast_alert : boolean, watering_alert : boolean}, thunkAPI) => {
  console.log('userDataToSend', userData);
  try {
    const response = await axiosInstance.patch('/me/alerts', {
      forecast_alert: userData.forecast_alert,
      watering_alert: userData.watering_alert,
    });
    console.log('response', response.data);
    userData.forecast_alert = response.data.forecast_alert;
    userData.watering_alert = response.data.watering_alert;
    console.log('userData', userData);
    return { userData };
  } catch (error) {
    return thunkAPI.rejectWithValue('Erreur de mise à jour des alertes');
  }
});


