import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import axiosInstance from '../../axios/axios';
import products from '../reducers/products';

// export const actionAddProductToFav = createAsyncThunk(
//   'fav/ADD_FAV',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState() as RootState;

//     const response = await axiosInstance.post('/me/garden', {
//       data: state.user.token,
//       product_id: state.products.products.id,
//     });
//     // const { products } = response.data;

//     return response.data;
//   }
// );

export const actionDeleteFav = createAsyncThunk(
  'fav/DELETE_FAV',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    console.log('my fav:', state.myGarden.favProductsTab);

    const response = await axiosInstance.post('/me/garden', {
      data: state.user.token,
      product_id: state.products.fruits.id,
      user_id: state.myGarden.user.id,
    });
    // const { products } = response.data;
    return response.data;
  }
);

export const actionAddProductToFav = createAsyncThunk(
  'fav/ADD_FAV',
  async (
    fruit: {
      id: number;
    },
    thunkAPI
  ) => {
    const state = thunkAPI.getState() as RootState;

    const response = await axiosInstance.post(
      '/me/garden',
      state.products.fruits.id
    );
    return response.data;
  }
);
