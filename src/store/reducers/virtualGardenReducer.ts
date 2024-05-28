import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/types';
import { fetchAllProducts } from '../thunks/productThunks';

interface PotagerVirtuelState {
  products: Product[];
  garden: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: PotagerVirtuelState = {
  products: [],
  garden: [],
  loading: false,
  error: null,
};

const potagerVirtuelSlice = createSlice({
  name: 'potagerVirtuel',
  initialState,
  reducers: {
    addToGarden: (state, action: PayloadAction<Product>) => {
      console.log('Reducer - addToGarden:', action.payload);
      state.garden.push(action.payload);
    },
    updateProductPosition: (state, action: PayloadAction<{ product_id: number, position: number   }>) => {
      console.log('Reducer - updateProductPosition:', action.payload);
      const { product_id, position } = action.payload;
      const product = state.garden.find(p => p.id === product_id);
      if (product) {
        product.position = position;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  }
});

export const { addToGarden, updateProductPosition } = potagerVirtuelSlice.actions;

export default potagerVirtuelSlice.reducer;
