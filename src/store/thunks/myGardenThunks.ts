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
    const userData = response.data[0].result.user;
    const { products } = response.data[1];

    console.log('me:', userData);
    console.log('my products:', products);

    return { userData, products };
  }
);

export default actionGetDataUser;
