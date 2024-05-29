import { createAction, createReducer } from '@reduxjs/toolkit';
import { boolean } from 'joi';
import userActions from '../thunks/userThunk';
import actionCheckLogin from '../thunks/user';
import { User } from '../../types/types';

// -- STATE intial et son interface --

interface UserState {
  token: null | string;
  error: null | string;
  logged: boolean;
  credentials: {
    email: string;
    password: string;
  };
  user: User;
  isAdmin: boolean;
}

export const initialState: UserState = {
  token: null,
  error: null,
  logged: false,
  credentials: {
    email: '',
    password: '',
  },
  user: [],
  isAdmin: false,
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
export const actionNewUser = createAction<{
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  address: string;
  zip_code: string;
  city: string;
}>('user/NEW_USER');
export const actionVerifyEmailExist = createAction<string>(
  'user/VERIFY_EMAIL_EXIST'
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionChangeCredential, (state, action) => {
      state.credentials[action.payload.name] = action.payload.value;
    })
    .addCase(userActions.actionCheckLogin.fulfilled, (state, action) => {
      state.logged = true;
      state.token = action.payload.token;
      state.error = null;
    })
    .addCase(userActions.actionCheckLogin.rejected, (state) => {
      state.error = 'Erreur de connexion';
    })
    .addCase(actionLogOut, (state) => {
      state.logged = false;
      state.isAdmin = false;
    })
    .addCase(actionLogIn, (state, action) => {
      state.logged = true;
      state.token = action.payload.jwt;
      state.firstname = action.payload.firstname;
    })
    .addCase(userActions.actionNewUser.fulfilled, (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.address = action.payload.address;
      state.zip_code = action.payload.zip_code;
      state.city = action.payload.city;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.error = null;
    })
    .addCase(userActions.actionNewUser.rejected, (state, action) => {
      state.error = (action.payload as string) || 'Erreur de connexion';
    })
    .addCase(userActions.actionVerifyEmailExist.fulfilled, (state, action) => {
      state.error = null;
    })
    .addCase(userActions.actionVerifyEmailExist.rejected, (state, action) => {
      state.error = 'Email déjà utilisé';
    });
});

export default userReducer;
