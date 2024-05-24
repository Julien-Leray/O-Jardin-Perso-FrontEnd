import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import axiosInstance from '../../axios/axios';

const actionGetDataUser = createAsyncThunk(
  'user/GET_DATA',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    console.log('my token:', state.user.token);

    const response = await axiosInstance.get('/me/garden', {
      data: state.user.token,
    });
    const { userId, productId } = response.data;
    console.log('my response:', response.data);

    return { userId, productId };
  }
);

export default actionGetDataUser;
