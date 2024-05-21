import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductsState } from '../../types/types';
import {
  fetchFruits,
  fetchLegumes,
  fetchFruitDetails,
} from '../thunks/productThunks';

const initialState: ProductsState = {
  fruits: [],
  legumes: [],
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
      .addCase(fetchFruitDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFruitDetails.fulfilled, (state, action) => {
        // eslint-disable-next-line no-console
        console.log('Fulfilled action payload:', action.payload);
        state.selectedFruit = action.payload;
        state.loading = false;
      })

      .addCase(fetchFruitDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
