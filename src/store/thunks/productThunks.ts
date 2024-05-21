import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFruits = createAsyncThunk(
  'products/fetchFruits',
  async (_, thunkAPI) => {
    const response = await axios.get('/api/fruits');
    return response.data;
  }
);

export const fetchLegumes = createAsyncThunk(
  'products/fetchLegumes',
  async (_, thunkAPI) => {
    const response = await axios.get('/api/legumes');
    return response.data;
  }
);
