import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import axiosInstance from '../../axios/axios';

const actionGetDataUser = createAsyncThunk(
  'user/GET_DATA',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const response = await axiosInstance.get('/me/garden', {
      data: state.user.token,
    });
    const { user } = response.data[0].result;
    const { products } = response.data[1];

    console.log('me:', user);
    console.log('my products:', products);

    return { user, products };
  }
);

export default actionGetDataUser;
