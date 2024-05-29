import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import type { RootState } from '../store';
import axiosInstance from '../../axios/axios';
import { Product } from '../../@types/types';

const actionGetDataUser = createAsyncThunk('user/GET_DATA', async () => {
  const response = await axiosInstance.get('/me/garden/');

  const userData = response.data[0].result.user;
  const allFavProducts = response.data[0].result.products;

  console.log('response.data UserData', userData, allFavProducts);

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

  return userData;
});

export default actionGetDataUser;
