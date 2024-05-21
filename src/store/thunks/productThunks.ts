import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL of your API
const API_BASE_URL = 'http://ns381313.ip-94-23-250.eu:4000/products';

// Fetch all fruits
export const fetchFruits = createAsyncThunk(
  'products/fetchFruits',
  async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}?category_id=1`); // category_id=1 for fruits
      console.log('Fetching fruits :', response.data); // Log to see the fetched fruits data
      return response.data;
    } catch (error) {
      console.error('Error fetching fruits:', error); // Log to understand any errors fetching fruits
      throw error;
    }
  }
);

// Fetch all legumes
export const fetchLegumes = createAsyncThunk(
  'products/fetchLegumes',
  async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}?category_id=2`); // category_id=2 for legumes
      console.log('Fetching legumes :', response.data); // Log to see the fetched legumes data
      return response.data;
    } catch (error) {
      console.error('Error fetching legumes:', error); // Log to understand any errors fetching legumes
      throw error;
    }
  }
);

// Fetch details for a single fruit by ID
export const fetchFruitDetails = createAsyncThunk(
  'products/fetchFruitDetails',
  async (fruitId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${fruitId}`);
      console.log(`Fetching details for fruit ID ${fruitId}:`, response.data); // Log to see the data of a specific fruit
      return response.data;
    } catch (error) {
      console.error(`Error fetching details for fruit ID ${fruitId}:`, error); // Log to understand any errors fetching specific fruit details
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch details for a single legume by ID
export const fetchLegumeDetails = createAsyncThunk(
  'products/fetchLegumeDetails',
  async (legumeId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${legumeId}`);
      console.log(`Fetching details for legume ID ${legumeId}:`, response.data); // Log to see the data of a specific legume
      return response.data;
    } catch (error) {
      console.error(`Error fetching details for legume ID ${legumeId}:`, error); // Log to understand any errors fetching specific legume details
      return rejectWithValue(error.response.data);
    }
  }
);
