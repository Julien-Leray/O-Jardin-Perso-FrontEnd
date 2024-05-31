import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductInVirtualGarden } from '../../types/types';
import {
  fetchAllProductsInVirtualGarden,
  fetchProducts,
  fetchMatchingProducts,
  updateProductPosition as updateProductPositionThunk,
} from '../thunks/virtualGardenThunks';

interface PotagerVirtuelState {
  products: Product[];
  garden: Product[];
  virtualGarden: ProductInVirtualGarden[];
  matchingProducts: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: PotagerVirtuelState = {
  products: [],
  garden: [],
  virtualGarden: [],
  matchingProducts: [],
  loading: false,
  error: null,
};

const potagerVirtuelSlice = createSlice({
  name: 'potagerVirtuel',
  initialState,
  reducers: {
    addToGarden(state, action: PayloadAction<Product>) {
      console.log('Adding to garden:', action.payload);
      state.garden.push(action.payload);
      console.log('Updated garden state:', state.garden);
    },
    updateProductPosition: (
      state,
      action: PayloadAction<{ product_id: number; position: string }>
    ) => {
      console.log('Reducer - updateProductPosition:', action.payload);
      const { product_id, position } = action.payload;
      const product = state.garden.find((p) => p.id === product_id);
      if (product) {
        product.position = position;
      }
    },
    addToVirtualGarden(state, action: PayloadAction<ProductInVirtualGarden>) {
      state.virtualGarden.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
      .addCase(fetchAllProductsInVirtualGarden.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProductsInVirtualGarden.fulfilled, (state, action) => {
        state.loading = false;
        state.virtualGarden = action.payload;
      })
      .addCase(fetchAllProductsInVirtualGarden.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || 'Failed to fetch virtual garden products';
      })
      .addCase(fetchMatchingProducts.fulfilled, (state, action) => {
        state.matchingProducts = action.payload;
      })
      .addCase(updateProductPositionThunk.fulfilled, (state, action) => {
        const { product_id, position } = action.payload;
        const product = state.garden.find((p) => p.id === product_id);
        if (product) {
          product.position = position;
        }
      });
  },
});

export const { addToGarden, updateProductPosition, addToVirtualGarden } =
  potagerVirtuelSlice.actions;

export default potagerVirtuelSlice.reducer;
