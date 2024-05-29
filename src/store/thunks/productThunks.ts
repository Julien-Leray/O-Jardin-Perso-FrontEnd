import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';
import { Product } from '../../@types/types';

export const fetchAllProductsbyCategory = createAsyncThunk(
  'products/fetchByCategory',
  async () => {
    const response = await axiosInstance.get('/products/');
    const allProducts = response.data;

    const sortedProducts = {
      fruits: [] as Product[],
      legumes: [] as Product[],
    };

    allProducts.forEach((product: Product) => {
      if (product.category_id === 1) {
        sortedProducts.fruits.push(product);
      } else {
        sortedProducts.legumes.push(product);
      }
    });
    return sortedProducts;
  }
);

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    const response = await axiosInstance.get('/products/');
    return response.data;
  }
);

// // Fetch all fruits
// export const fetchFruits = createAsyncThunk(
//   'products/fetchFruits',
//   async () => {
//     const response = await axios.get(`${API_BASE_URL_PRODUCTS}?category=Fruit`);
//     return response.data;
//   }
// );

// // Fetch all legumes
// export const fetchLegumes = createAsyncThunk(
//   'products/fetchLegumes',
//   async () => {
//     const response = await axios.get(
//       `${API_BASE_URL_PRODUCTS}?category=Vegetable`
//     );
//     return response.data;
//   }
// );

// // Fetch details for a single fruit by ID
// export const fetchFruitDetails = createAsyncThunk(
//   'products/fetchFruitDetails',
//   async (fruitId) => {
//     const response = await axios.get(`${API_BASE_URL_PRODUCTS}/${fruitId}`);
//     return response.data;
//   }
// );

// // Fetch details for a single legume by ID
// export const fetchLegumeDetails = createAsyncThunk(
//   'products/fetchLegumeDetails',
//   async (legumeId) => {
//     const response = await axios.get(`${API_BASE_URL_PRODUCTS}/${legumeId}`);
//     return response.data;
//   }
// );
