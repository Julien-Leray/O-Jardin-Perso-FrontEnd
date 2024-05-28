import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  // fetchFruits,
  // fetchFruitDetails,
  // fetchLegumes,
  // fetchLegumeDetails,
  fetchAllProducts,
  fetchAllProductsbyCategory,
} from '../thunks/productThunks';
import { Product } from '../../@types/types';
import {
  actionAddProductToFav,
  actionDeleteFav,
} from '../thunks/favoritesThunks';

interface ProductsState {
  allProducts: Product[];
  productsByCat: {
    fruits: Product[];
    legumes: Product[];
  };
  selectedFruit?: Product | null;
  selectedLegume?: Product | null;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: ProductsState = {
  allProducts: [],
  productsByCat: {
    fruits: [],
    legumes: [],
  },
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
      .addCase(fetchAllProductsbyCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProductsbyCategory.fulfilled, (state, action) => {
        state.productsByCat.fruits = action.payload.fruits;
        state.productsByCat.legumes = action.payload.legumes;
        state.loading = false;
      })
      .addCase(fetchAllProductsbyCategory.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(actionAddProductToFav.fulfilled, (state, action) => {
        state.productsByCat.fruits[0].id = action.payload;
        state.productsByCat.legumes[0].id = action.payload;
        state.error = null;
      })
      .addCase(actionDeleteFav.fulfilled, (state, action) => {
        state.productsByCat.fruits[0].id = action.payload;
        state.productsByCat.legumes[0].id = action.payload;
        state.error = null;
      });
  },
});

export default productsSlice.reducer;
