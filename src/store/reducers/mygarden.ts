import { createAction, createReducer } from '@reduxjs/toolkit';
import { Product, User } from '../../@types/types';
import actionGetDataUser from '../thunks/myGardenThunks';

// -- STATE intial et son interface --
interface MyGardenState {
  loading: boolean;
  error: string | null | undefined;
  favProducts: {
    favLegumes: Product[];
    favFruits: Product[];
  };
  userData: User;
}

const initialState: MyGardenState = {
  favProducts: {
    favLegumes: [],
    favFruits: [],
  },
  userData: [],
  loading: false,
  error: null,
};

const myGardenReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionGetDataUser.fulfilled, (state, action) => {
      state.favProducts = action.payload.sortedFavProducts;
      state.userData = action.payload.userData;
      console.log('test', state.userData);
      console.log('test2', action.payload.userData);
      state.error = null;
    })
    .addCase(actionGetDataUser.rejected, (state) => {
      state.error = 'Erreur de connexion';
    });
});

export default myGardenReducer;
