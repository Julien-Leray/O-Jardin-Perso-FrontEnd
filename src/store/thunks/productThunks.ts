import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL of your API
const API_BASE_URL = 'http://ns381313.ip-94-23-250.eu:4000/products';

// Fetch all fruits & legumes
export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  }
);

// Fetch all fruits
export const fetchFruits = createAsyncThunk(
  'products/fetchFruits',
  async () => {
    const response = await axios.get(`${API_BASE_URL}?category_id=1`); // category_id=1 for fruits
    return response.data;
  }
);

// Fetch all legumes
export const fetchLegumes = createAsyncThunk(
  'products/fetchLegumes',
  async () => {
    const response = await axios.get(`${API_BASE_URL}?category_id=2`); // category_id=2 for legumes
    return response.data;
  }
);

// Fetch details for a single fruit by ID
export const fetchFruitDetails = createAsyncThunk(
  'products/fetchFruitDetails',
  async (fruitId) => {
    const response = await axios.get(`${API_BASE_URL}/${fruitId}`);
    return response.data;
  }
);

// Fetch details for a single legume by ID
export const fetchLegumeDetails = createAsyncThunk(
  'products/fetchLegumeDetails',
  async (legumeId) => {
    const response = await axios.get(`${API_BASE_URL}/${legumeId}`);
    return response.data;
  }
);
