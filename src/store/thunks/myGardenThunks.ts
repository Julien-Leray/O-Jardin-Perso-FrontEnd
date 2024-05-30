import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
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

   console.log(response.data)
    const userData = response.data[0].result.user;
    console.log('response.data UserData', response);
    const allFavProducts = response.data[0].result.products;

    console.log('response.data UserData+Products', userData, allFavProducts);

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

      console.log('response sortedProducts', sortedFavProducts);

  
    return { userData, sortedFavProducts };
});

export default actionGetDataUser;
