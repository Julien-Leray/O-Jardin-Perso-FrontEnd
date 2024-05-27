import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import axiosInstance, { addTokenJwtToAxiosInstance } from '../../axios/axios';
import { addTokenAndPseudoToLocalStorage } from '../../localStorage/localstorage';

const actionCheckLogin = createAsyncThunk(
  'user/CHECK_LOGIN',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.post('/login', {
      email: state.user.credentials.email,
      password: state.user.credentials.password,
    });
    const { user, token } = response.data;
    addTokenJwtToAxiosInstance(token);
    addTokenAndPseudoToLocalStorage(token);

    return { user, token };
  }
);

export default actionCheckLogin;
