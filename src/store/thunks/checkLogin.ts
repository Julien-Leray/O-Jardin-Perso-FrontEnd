import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import axiosInstance, { addTokenJwtToAxiosInstance } from '../../axios/axios';
import { addTokenAndPseudoToLocalStorage } from '../../localStorage/localstorage';

const actionCheckLogin = createAsyncThunk(
  'user/CHECK_LOGIN',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.post(
      'http://ns381313.ip-94-23-250.eu:4000/login',
      {
        email: state.user.credentials.email,
        password: state.user.credentials.password,
      }
    );
    const { firstname, token } = response.data;

    addTokenJwtToAxiosInstance(token);
    addTokenAndPseudoToLocalStorage(token, firstname);

    return { firstname, token };
  }
);

export default actionCheckLogin;
