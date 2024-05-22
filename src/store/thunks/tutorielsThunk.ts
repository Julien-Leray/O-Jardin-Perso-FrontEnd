import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axios';


export const fetchTutorials = createAsyncThunk(
  'tutos/fetchTutorials',
  async () => {
    console.log('cest ok on passe à axios');
    const response = await axiosInstance.get('/tutorials/:id');
    console.log(response);
    return response.data;
  });

  export const fetchAllTutorials = createAsyncThunk(
    'tutos/fetchAllTutorials',
    async () => {
      const response = await axiosInstance.get('/tutorials');
      return response.data;
    }
);
