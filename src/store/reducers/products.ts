import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchFruits,
  fetchFruitDetails,
  fetchLegumes,
  fetchLegumeDetails,
} from '../thunks/productThunks';
import { Product, ProductsState } from '../../types/types';

const initialState: ProductsState = {
  fruits: [],
  legumes: [],
  selectedFruit: null,
  selectedLegume: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFruits.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchFruits.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.fruits = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchFruits.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchFruitDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchFruitDetails.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.selectedFruit = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchFruitDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchLegumes.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchLegumes.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.legumes = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchLegumes.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchLegumeDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchLegumeDetails.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.selectedLegume = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchLegumeDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
