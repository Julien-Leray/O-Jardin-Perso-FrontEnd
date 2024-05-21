import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL of your API
const API_BASE_URL = 'http://ns381313.ip-94-23-250.eu:4000';

export const fetchFruits = createAsyncThunk(
  'products/fetchFruits',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/products?category_id=1`);
    return response.data;
  }
);

export const fetchLegumes = createAsyncThunk(
  'products/fetchLegumes',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/products?category_id=2`);
    return response.data;
  }
);
