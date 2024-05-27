import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';

interface UpdateProductPositionPayload {
  id: number;
  position: string;
  quantity: number;
  productId: number;
}

const updateProductPosition = createAsyncThunk(
  'virtualGarden/updateProductPosition',
  async (payload: UpdateProductPositionPayload) => {
    const { id, position, quantity, productId } = payload;

    console.log('Sending payload to backend:', payload);

    const response = await axiosInstance.get(`/me/virtual-garden/${id}`, {
      params: {
        position,
        quantity,
        productId,
      },
    });

    console.log('Response from backend:', response.data);

    return response.data;
  }
);

export default {
  updateProductPosition,
};
