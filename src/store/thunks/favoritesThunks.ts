import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import axiosInstance from '../../axios/axios';

export const actionAddProductToFav = createAsyncThunk(
  'fav/ADD_FAV',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const response = await axiosInstance.post('/me/garden', {
      data: state.user.token,
      // product_id: state.products.,
    });
    // const { products } = response.data;

    return response.data;
  }
);

export const actionDeleteFav = createAsyncThunk(
  'fav/DELETE_FAV',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const response = await axiosInstance.post('/me/garden', {
      // product_id: state.myGarden.favProducts,
      // user_id: state.myGarden.user.id,
    });
    // const { products } = response.data;

    console.log('my response:', response.data);

    return response.data;
  }
);
