import { PayloadAction, createAction, createReducer } from '@reduxjs/toolkit';
import actionCheckLogin from '../thunks/checkLogin';
import { UserState } from '../../types/types';

// -- STATE intial et son interface --

export const initialState: UserState = {
  token: null,
  error: null,
  logged: false,
  credentials: {
    email: '',
    password: '',
  },
  user: [],
};

export const actionChangeCredential = createAction<{
  name: 'email' | 'password';
  value: string;
}>('user/CHANGE_CREDENTIAL');

export const actionLogOut = createAction('user/LOGOUT');
export const actionLogIn = createAction<{
  jwt: string;
  user: [];
}>('user/LOGIN');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionChangeCredential, (state, action) => {
      state.credentials[action.payload.name] = action.payload.value;
    })
    .addCase(actionCheckLogin.fulfilled, (state, action) => {
      state.logged = true;
      state.token = action.payload.token;
      state.error = null;
    })
    .addCase(actionCheckLogin.rejected, (state) => {
      state.error = 'Erreur de connexion';
    })
    .addCase(actionLogOut, (state) => {
      state.logged = false;
    })
    .addCase(actionLogIn, (state, action) => {
      state.logged = true;
      state.token = action.payload.jwt;
      state.user = action.payload.user;
    });
});

export default userReducer;
