import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductsState } from '../../types/types';

const initialState: ProductsState = {
  fruits: [],
  legumes: [],
  loading: false,
  error: null,
};

export const fetchFruits = createAsyncThunk<Product[]>(
  'products/fetchFruits',
  async () => {
    return [
      { id: 1, name: 'Pomme', description: 'Délicieuse et croquante' },
      { id: 2, name: 'Banane', description: 'Riche en potassium' },
    ];
  }
);

export const fetchLegumes = createAsyncThunk<Product[]>(
  'products/fetchLegumes',
  async () => {
    return [
      { id: 1, name: 'Carotte', description: 'Bonne pour la vision' },
      { id: 2, name: 'Tomate', description: 'Parfaite dans les salades' },
    ];
  }
);

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
      });
  },
});

export default productsSlice.reducer;
