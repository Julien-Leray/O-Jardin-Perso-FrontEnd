import { createAction, createReducer } from '@reduxjs/toolkit';
import actionCheckLogin from '../thunks/checkLogin';

// -- STATE intial et son interface --
interface UserState {
  token: null | string;
  error: null | string;
  logged: boolean;
  credentials: {
    email: string;
    password: string;
  };
  firstname: string;
  lastname: string;
  address: string;
  zip_code: number;
  city: string;
  watering_alert: boolean;
  forecast_alert: boolean;
  created_at: string;
  updated_at: null;
}
export const initialState: UserState = {
  token: null,
  error: null,
  logged: false,
  credentials: {
    email: 'test2@julien.fr',
    password: 'test',
  },
  firstname: 'julien',
  lastname: 'julien',
  address: 'bujvdividpv',
  zip_code: 56000,
  city: 'Vannes',
  watering_alert: false,
  forecast_alert: false,
  created_at: '2024-05-17T12:04:20.389Z',
  updated_at: null,
};

export const actionChangeCredential = createAction<{
  name: 'email' | 'password';
  value: string;
}>('user/CHANGE_CREDENTIAL');

export const actionLogOut = createAction('user/LOGOUT');
export const actionLogIn = createAction<{
  jwt: string;
  firstname: string;
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
      state.firstname = action.payload.firstname;
    });
});

export default userReducer;
