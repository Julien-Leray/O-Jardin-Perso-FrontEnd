import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../../axios/axios';

const API_BASE_URL_TUTOS = 'http://localhost:4000/api/tutorials/';
// const API_BASE_URL = 'http://ns381313.ip-94-23-250.eu:4000/tutorials/';

// export const fetchTutorials = createAsyncThunk(
//   'tutos/fetchTutorials',
//   async () => {
//     console.log('cest ok on passe à axios');
//     const response = await axiosInstance.get('/tutorials/:id');
//     console.log(response);
//     return response.data;
//   }
// );

export const fetchAllTutorials = createAsyncThunk(
  'tutos/fetchAllTutorials',
  async () => {
    const response = await axios.get(`${API_BASE_URL_TUTOS}`);
    return response.data;
  }
);

export const fetchTutorialDetails = createAsyncThunk(
  'tutoriels/fetchTutorialDetails',
  async (tutorialId) => {
    const response = await axios.get(`${API_BASE_URL_TUTOS}${tutorialId}`);
    return response.data;
  }
);

// export const fetchAllTutorials = createAsyncThunk(
//   'tutos/fetchAllTutorials',
//   async () => {
//     const response = await axiosInstance.get('/tutorials');
//     return response.data;
//   }
// );

export default fetchAllTutorials;
