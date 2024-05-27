import { createAction, createReducer } from '@reduxjs/toolkit';
import { Product, User } from '../../types/types';
import actionGetDataUser from '../thunks/myGardenThunks';

// -- STATE intial et son interface --
interface MyGardenState {
  // token: string;
  loading: boolean;
  error: string | null | undefined;
  products: Product[];
  user: User[];
}

const initialState: MyGardenState = {
  // token: '',
  products: [],
  user: [],
  loading: false,
  error: null,
};

export const actionDisplayDataUser = createAction<{
  products: Product[];
  user: User[];
}>('user/DISPLAY_DATA');

const myGardenReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionGetDataUser.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.user = action.payload.user;
      state.error = null;
    })
    .addCase(actionGetDataUser.rejected, (state) => {
      state.error = 'Erreur de connexion';
    });
});

export default myGardenReducer;
