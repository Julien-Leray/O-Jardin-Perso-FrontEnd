import { createAction, createReducer } from '@reduxjs/toolkit';
import { Product, User } from '../../@types/types';
import actionGetDataUser from '../thunks/myGardenThunks';

// -- STATE intial et son interface --
interface MyGardenState {
  loading: boolean;
  error: string | null | undefined;
  sortedFavProducts: {
    favFruits: Product[];
    favLegumes: Product[];
  };
  user: User[];
}

const initialState: MyGardenState = {
  sortedFavProducts: {
    favFruits: [],
    favLegumes: [],
  },
  user: [],
  loading: false,
  error: null,
};

const myGardenReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionGetDataUser.fulfilled, (state, action) => {
      state.sortedFavProducts = action.payload.sortedFavProducts;
      state.user = action.payload.userData;
      state.error = null;
    })
    .addCase(actionGetDataUser.rejected, (state) => {
      state.error = 'Erreur de connexion';
    });
});

export default myGardenReducer;
