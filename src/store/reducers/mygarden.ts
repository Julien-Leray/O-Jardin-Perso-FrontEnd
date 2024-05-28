import { createAction, createReducer } from '@reduxjs/toolkit';
import { Product, User } from '../../@types/types';
import actionGetDataUser from '../thunks/myGardenThunks';
import {
  actionAddProductToFav,
  actionDeleteFav,
} from '../thunks/favoritesThunks';

// -- STATE intial et son interface --
interface MyGardenState {
  loading: boolean;
  error: string | null | undefined;
  favProductsTab: Product[];
  user: User[];
}

const initialState: MyGardenState = {
  favProductsTab: [],
  user: [],
  loading: false,
  error: null,
};

const myGardenReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionGetDataUser.fulfilled, (state, action) => {
      state.favProductsTab = action.payload.products;
      state.user = action.payload.userData;

      state.error = null;
    })
    .addCase(actionGetDataUser.rejected, (state) => {
      state.error = 'Erreur de connexion';
    });
});

export default myGardenReducer;
