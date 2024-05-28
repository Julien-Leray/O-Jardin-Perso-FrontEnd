import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchFruits,
  fetchFruitDetails,
  fetchLegumes,
  fetchLegumeDetails,
  fetchAllProducts,
  fetchAllProductsbyCategory,
} from '../thunks/productThunks';
import { Product } from '../../@types/types';
import { actionAddProductToFav } from '../thunks/favoritesThunks';

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
      // .addCase(fetchFruits.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(
      //   fetchFruits.fulfilled,
      //   (state, action: PayloadAction<Product[]>) => {
      //     // state.fruits = action.payload;
      //     state.loading = false;
      //   }
      // )
      // .addCase(fetchFruits.rejected, (state, action) => {
      //   state.error = action.error.message;
      //   state.loading = false;
      // })
      // .addCase(fetchFruitDetails.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(
      //   fetchFruitDetails.fulfilled,
      //   (state, action: PayloadAction<Product>) => {
      //     state.selectedFruit = action.payload;
      //     state.loading = false;
      //   }
      // )
      // .addCase(fetchFruitDetails.rejected, (state, action) => {
      //   state.error = action.error.message;
      //   state.loading = false;
      // })
      // .addCase(fetchLegumes.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(
      //   fetchLegumes.fulfilled,
      //   (state, action: PayloadAction<Product[]>) => {
      //     // state.legumes = action.payload;
      //     state.loading = false;
      //   }
      // )
      // .addCase(fetchLegumes.rejected, (state, action) => {
      //   state.error = action.error.message;
      //   state.loading = false;
      // })
      // .addCase(fetchLegumeDetails.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(
      //   fetchLegumeDetails.fulfilled,
      //   (state, action: PayloadAction<Product>) => {
      //     state.selectedLegume = action.payload;
      //     state.loading = false;
      //   }
      // )
      // .addCase(fetchLegumeDetails.rejected, (state, action) => {
      //   state.error = action.error.message;
      //   state.loading = false;
      // })
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
        // state.products.isFav = true;
        state.productsByCat.fruits[0].id = action.payload.products.id;
        state.productsByCat.legumes[0].id = action.payload.products.id;

        console.log(state.productsByCat.fruits[0].id);
        state.error = null;
      });
    // .addCase(actionDeleteFav.fulfilled, (state, action) => {
    //   state.favProductsTab.filter(
    //     (product) => product.id !== action.payload.products.product_id
    //   );
    //   state.error = null;
    // });
  },
});

export default productsSlice.reducer;
