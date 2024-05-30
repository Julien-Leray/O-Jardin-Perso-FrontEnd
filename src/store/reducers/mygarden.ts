import { createAction, createReducer } from '@reduxjs/toolkit';
import { Product, User } from '../../@types/types';
import actionGetDataUser from '../thunks/myGardenThunks';
import { actionDeleteFav } from '../thunks/favoritesThunks';

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
  userData: {} as User,
  loading: false,
  error: null,
};

const myGardenReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionGetDataUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(actionGetDataUser.fulfilled, (state, action) => {
      state.favProducts = action.payload.sortedFavProducts;
      state.userData = action.payload.userData;
      state.loading = false;
      state.error = null;
    })
    .addCase(actionGetDataUser.rejected, (state, action) => {
      console.error('actionGetDataUser rejected:', action.payload);
      state.loading = false;
      state.error = action.payload as string;
    });
});

export default myGardenReducer;
