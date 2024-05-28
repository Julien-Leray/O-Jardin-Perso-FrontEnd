import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';

interface UpdateProductPositionPayload {
  id: number;
  position: string[];
  quantity: number;
  productId: number;
}

const updateProductPosition = createAsyncThunk(
  'virtualGarden/updateProductPosition',
  async (payload: UpdateProductPositionPayload) => {
    const { position, quantity, productId } = payload;

    console.log('Sending payload to backend:', payload);

    const response = await axiosInstance.post(`/me/virtual-garden`, {
      position,
      quantity,
      productId,
    });

    console.log('Response from backend:', response.data);

    return response.data;
  }
);

export default {
  updateProductPosition,
};
