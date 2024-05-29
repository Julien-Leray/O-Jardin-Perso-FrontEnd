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
    const { firstname, token } = response.data;

    addTokenJwtToAxiosInstance(token);
    addTokenAndPseudoToLocalStorage(token, firstname);

    return { firstname, token };
  }
);
const actionNewUser = createAsyncThunk(
  'user/NEW_USER',
  async (newUser: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    address?: string;
    zip_code?: string;
    city?: string;
  }) => {
    const response = await axiosInstance.post('/registration', newUser);
    return response.data;
  }
);

const actionVerifyEmailExist = createAsyncThunk(
  'user/VERIFY_EMAIL_EXIST',
  async (email: string) => {
    const response = await axiosInstance.post('/registration/email', { email });
    if (response.data.exists === true) {
      return 'Email déjà utilisé';
    }
    return 'Email disponible';
  }
);

const userActions = { actionCheckLogin, actionNewUser, actionVerifyEmailExist };

export default userActions;
