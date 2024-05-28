import { createReducer } from '@reduxjs/toolkit';
import virtualGardenThunks from '../thunks/virtualGardenThunks';
import { Product } from '../../@types/types';

interface VirtualGardenState {
  products: Product[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: VirtualGardenState = {
  products: [],
  loading: false,
  error: null,
};

const virtualGardenReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(virtualGardenThunks.updateProductPosition.pending, (state) => {
      state.loading = true;
    })
    .addCase(
      virtualGardenThunks.updateProductPosition.fulfilled,
      (state, action) => {
        state.loading = false;
        const updatedProduct = action.payload;
        const index = state.products.findIndex(
          (p) => p.id === updatedProduct.id
        );
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      }
    )
    .addCase(
      virtualGardenThunks.updateProductPosition.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }
    );
});

export default virtualGardenReducer;
