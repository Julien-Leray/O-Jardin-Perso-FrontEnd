import { createAction, createReducer } from '@reduxjs/toolkit';
import { boolean } from 'joi';
import userActions from '../thunks/userThunk';
import actionCheckLogin from '../thunks/userThunk';
import { User } from '../../@types/types';

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
}

export const initialState: UserState = {
  token: null,
  error: null,
  logged: false,
  credentials: {
    email: '',
    password: '',
  },
  user: {} as User,
};

export const actionChangeCredential = createAction<{
  name: 'email' | 'password';
  value: string;
}>('user/CHANGE_CREDENTIAL');

export const actionLogOut = createAction('user/LOGOUT');

export const actionLogIn = createAction<{
  token: string;
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
    })
    .addCase(actionLogIn, (state, action) => {
      state.logged = true;
      state.token = action.payload.token;
    })
    .addCase(userActions.actionNewUser.fulfilled, (state, action) => {
      state.user.firstname = action.payload.firstname;
      state.user.lastname = action.payload.lastname;
      state.user.address = action.payload.address;
      state.user.zip_code = action.payload.zip_code;
      state.user.city = action.payload.city;
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
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
