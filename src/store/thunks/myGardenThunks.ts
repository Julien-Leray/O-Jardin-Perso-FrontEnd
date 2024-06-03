import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import type { RootState } from '../store';
import axiosInstance from '../../axios/axios';
import { Product } from '../../@types/types';

const fetchUserData = createAsyncThunk('user/GET_DATA', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/me/garden');

    const userData = response.data[0].result.user;
    const allFavProducts = response.data[0].result.products;

    const sortedFavProducts = {
      favFruits: [] as Product[],
      favLegumes: [] as Product[],
    };

    console.log(userData);

    return { userData, allFavProducts };
  } catch (error) {
    return thunkAPI.rejectWithValue('Erreur de connexion');
  }
});

export default fetchUserData;
