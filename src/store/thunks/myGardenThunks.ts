import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import axiosInstance from '../../axios/axios';
import { Product } from '../../@types/types';

const actionGetDataUser = createAsyncThunk(
  'user/GET_DATA',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const response = await axiosInstance.get('/me/garden', {
      data: state.user.token,
    });
    console.log('response.data', response.data[0].result.user);

    const userData = response.data[0].result.user;
    const allFavProducts = response.data[0].result.products;

    const sortedFavProducts = {
      favFruits: [] as Product[],
      favLegumes: [] as Product[],
    };

    allFavProducts.forEach((product: Product) => {
      if (product.category_id === 1) {
        sortedFavProducts.favFruits.push(product);
      } else {
        sortedFavProducts.favLegumes.push(product);
      }
    });

    return { userData, sortedFavProducts };
  }
);

export default actionGetDataUser;
