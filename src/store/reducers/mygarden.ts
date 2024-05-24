import { createAction, createReducer } from '@reduxjs/toolkit';
import { Product } from '../../types/types';
import actionGetDataUser from '../thunks/myGardenThunks';

// -- STATE intial et son interface --
interface MyGardenState {
  token: string;
  product_id: Product[];
  user_id: [];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: MyGardenState = {
  token: '',
  product_id: [],
  user_id: [],
  loading: false,
  error: null,
};

export const actionDisplayDataUser = createAction<{
  product_id: Product[];
  user_id: [];
  token: '';
}>('user/DISPLAY_DATA');

const myGardenReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionGetDataUser.fulfilled, (state, action) => {
      // state.token = action.payload.token;
      state.product_id = action.payload.productId;
      state.user_id = action.payload.userId;
      state.error = null;
      console.log(action.payload.productId, action.payload.userId);
    })
    .addCase(actionGetDataUser.rejected, (state) => {
      state.error = 'Erreur de connexion';
    });
});

export default myGardenReducer;
