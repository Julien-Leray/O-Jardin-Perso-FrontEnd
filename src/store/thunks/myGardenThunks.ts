import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import axiosInstance from '../../axios/axios';

const actionGetDataUser = createAsyncThunk(
  'user/GET_DATA',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.get('/me/garden', {
      token: state.user.token,
    });
    const { user_id, product_id } = response.data;

    // addTokenJwtToAxiosInstance(token);
    // addTokenAndPseudoToLocalStorage(token, firstname);

    return { user_id, product_id };
  }
);

export default actionGetDataUser;
