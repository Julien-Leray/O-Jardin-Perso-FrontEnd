import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllProducts } from '../thunks/productThunks';
import { Product } from '../../@types/types';
import {
  actionAddProductToFav,
  actionDeleteFav,
} from '../thunks/favoritesThunks';
import slugify from '../../utils/utils';

interface ProductsState {
  allProducts: Product[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: ProductsState = {
  allProducts: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(actionAddProductToFav.fulfilled, (state, action) => {
        state.allProducts[0].id = action.payload;
      })
      .addCase(actionDeleteFav.fulfilled, (state, action) => {
        state.allProducts[0].id = action.payload;
        state.error = null;
      });
  },
});

export default productsSlice.reducer;
