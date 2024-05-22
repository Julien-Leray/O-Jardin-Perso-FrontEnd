import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';

export const fetchTutorials = createAsyncThunk(
  'tutos/fetchTutorials',
  async (_, thunkAPI) => {
    const response = await axiosInstance.get('/tutorials');
    return response.data;
  }
);
