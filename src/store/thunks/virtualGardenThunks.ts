// src/store/thunks/potagerVirtuelThunks.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';
import { Product } from '../../types/types';
import { RootState } from '../../store/store';


interface UpdateProductPositionPayload {
  product_id: number;
  position: number;
  quantity: number; 
}

export const fetchProducts = createAsyncThunk('potagerVirtuel/fetchProducts', async () => {
  const response = await axiosInstance.get<Product[]>('/products');
  return response.data;
});

export const updateProductPosition = createAsyncThunk(
  'potagerVirtuel/updateProductPosition',
  async (payload: UpdateProductPositionPayload, { getState }) => {
    const { position, product_id } = payload;
    const state = getState() as RootState;
    const token = localStorage.getItem('token');

    console.log('Sending payload to backend:', position);

    const response = await axiosInstance.post(`/me/virtual-garden`, {
      position,
      product_id,
      quantity: 1,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Response from backend:', response.data);

    return response.data;
  }
);
