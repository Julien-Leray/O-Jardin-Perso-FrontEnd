import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import type { RootState } from '../store';
import axiosInstance from '../../axios/axios';
import { Product } from '../../@types/types';

const actionGetDataUser = createAsyncThunk(
  'user/GET_DATA',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('/me/garden');

      const userData = response.data[0].result.user;
      const allFavProducts = response.data[0].result.products;
      console.log('userData:', userData); 

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
    } catch (error) {
      return thunkAPI.rejectWithValue('Erreur de connexion');
    }
  }
);

export default actionGetDataUser;
