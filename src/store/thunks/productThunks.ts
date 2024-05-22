import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL of your API updated to local
const API_BASE_URL_PRODUCTS = 'http://localhost:4000/products';

// Fetch all fruits & legumes
export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const response = await axios.get(`${API_BASE_URL_PRODUCTS}`);
    console.log(response.data);
    return response.data;
  }
);

// Fetch all fruits
export const fetchFruits = createAsyncThunk(
  'products/fetchFruits',
  async () => {
    const response = await axios.get(`${API_BASE_URL_PRODUCTS}?category=Fruit`);
    return response.data;
  }
);

// Fetch all legumes
export const fetchLegumes = createAsyncThunk(
  'products/fetchLegumes',
  async () => {
    const response = await axios.get(
      `${API_BASE_URL_PRODUCTS}?category=Vegetable`
    );
    return response.data;
  }
);

// Fetch details for a single fruit by ID
export const fetchFruitDetails = createAsyncThunk(
  'products/fetchFruitDetails',
  async (fruitId) => {
    const response = await axios.get(`${API_BASE_URL_PRODUCTS}/${fruitId}`);
    return response.data;
  }
);

// Fetch details for a single legume by ID
export const fetchLegumeDetails = createAsyncThunk(
  'products/fetchLegumeDetails',
  async (legumeId) => {
    const response = await axios.get(`${API_BASE_URL_PRODUCTS}/${legumeId}`);
    return response.data;
  }
);
