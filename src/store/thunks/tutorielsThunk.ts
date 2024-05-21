import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTutorials = createAsyncThunk(
  'tutos/fetchTutorials',
  async (_, thunkAPI) => {
    const response = await axios.get('/api/tutos');
    return response.data;
  }
);
