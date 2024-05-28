import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import axiosInstance from '../../axios/axios';

export const actionAddProductToFav = createAsyncThunk(
  'fav/ADD_FAV',
  async (id: number, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    console.log('token to send', state.user.token);
    console.log('id to send', id);

    const response = await axiosInstance.post('/me/garden', {
      data: state.user.token,
      product_id: id,
    });

    return response.data;
  }
);

export const actionDeleteFav = createAsyncThunk(
  'fav/DELETE_FAV',
  async (id: number, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    console.log('id to delete', id);

    const response = await axiosInstance.delete(`/me/garden/:${id}`, {
      data: state.user.token,
    });

    return response.data;
  }
);
