import { createAction, createReducer } from '@reduxjs/toolkit';
import { Product, User } from '../../types/types';
import actionGetDataUser from '../thunks/myGardenThunks';
import {
  actionAddProductToFav,
  actionDeleteFav,
} from '../thunks/favoritesThunks';

// -- STATE intial et son interface --
interface MyGardenState {
  loading: boolean;
  error: string | null | undefined;
  favProducts: Product[] | string;
  user: User;
}

const initialState: MyGardenState = {
  favProducts: [],
  user: [],
  loading: false,
  error: null,
};

const myGardenReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionGetDataUser.fulfilled, (state, action) => {
      state.favProducts = action.payload.products;
      state.user = action.payload.userData;
      state.isAdmin = action.payload.userData.is_admin;

      state.error = null;
    })
    .addCase(actionGetDataUser.rejected, (state) => {
      state.error = 'Erreur de connexion';
    })
    .addCase(actionAddProductToFav.fulfilled, (state, action) => {
      state.favProducts.push(action.payload.products);
      state.error = null;
    })
    .addCase(actionDeleteFav.fulfilled, (state, action) => {
      state.favProducts.filter(
        (product) => product.id !== action.payload.products
      );
      state.error = null;
    });
});

export default myGardenReducer;
