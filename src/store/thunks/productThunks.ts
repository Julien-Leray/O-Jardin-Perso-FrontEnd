import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';

const fetchAllProducts = createAsyncThunk('products/fetchAll', async () => {
  const response = await axiosInstance.get('/api/products/');
  return response.data;
});
export default fetchAllProducts;
