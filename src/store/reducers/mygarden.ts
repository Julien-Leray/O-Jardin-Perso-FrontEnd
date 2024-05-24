import { createAction, createReducer } from '@reduxjs/toolkit';
import myGardenThunks from '../thunks/myGardenThunks.ts';
import { Product } from '../../types/types';

// -- STATE intial et son interface --
interface MyGardenState {
  product_id: [];
  user_id: [];
  loading: false;
  error: null;
}

export const initialState: MyGardenState = {};

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
