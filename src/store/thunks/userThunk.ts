import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import axiosInstance, { addTokenToAxiosInstance } from '../../axios/axios';
import { addTokenToLocalStorage } from '../../localStorage/localstorage';
import { User } from 'react-feather';

const actionCheckLogin = createAsyncThunk(
  'user/CHECK_LOGIN',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const response = await axiosInstance.post('/login', {
      email: state.user.credentials.email,
      password: state.user.credentials.password,
    });
    const { token } = response.data;
    addTokenToAxiosInstance(token);
    addTokenToLocalStorage(token);
    return { token };
  }
);
const actionNewUser = createAsyncThunk(
  'user/NEW_USER',
  async (User: { firstname: string; lastname: string; email: string; password: string; address?: string; zip_code?: string; city?: string
  }) => {
    console.log(User);
    const response = await axiosInstance.post('/registration', {User});
    console.log(response.data);
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
