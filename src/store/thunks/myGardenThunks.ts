import { createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import axiosInstance from '../../axios/axios';
import { Product } from '../../@types/types';

const actionGetDataUser = createAsyncThunk(
  'user/GET_DATA',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    // console.log()
    const response = await axiosInstance.get('/me/garden', {
      data: state.user.token,
    });

    const userData = response.data[0].result.user;
    console.log('response.data UserData', response);
    const allFavProducts = response.data[0].result.products;

    // console.log('response.data UserData', userData);

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
