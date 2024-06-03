import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';

const fetchUserData = createAsyncThunk('user/GET_DATA', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/me/garden');

    const userData = response.data[0].result.user;
    const allFavProducts = response.data[0].result.products;

    return { userData, allFavProducts };
  } catch (error) {
    return thunkAPI.rejectWithValue('Erreur de connexion');
  }
});

export default fetchUserData;
