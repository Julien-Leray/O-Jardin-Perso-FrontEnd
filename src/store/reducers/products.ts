import {
  createAction,
  createReducer,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import fetchAllProducts from '../thunks/productThunks';
import { Product } from '../../@types/types';
import {
  fetchAddProductToFav,
  fetchDeleteFav,
} from '../thunks/favoritesThunks';

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

const productReducer = createReducer(initialState, (builder) => {
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
    .addCase(fetchAddProductToFav.fulfilled, (state, action) => {
      state.allProducts.push({
        id: action.payload,
        isFav: true,
        name: '',
        description: '',
        latin_name: '',
        category_id: 0,
        plantation_date: '',
        harvest_date: '',
        watering_frequency: '',
      });
    })
    .addCase(fetchDeleteFav.fulfilled, (state, action) => {
      state.allProducts = state.allProducts.filter(
        (product) => product.id !== action.payload
      );
    });

  // .addCase(setAsFav, (state, action) => {
  //   state.allProducts.filter((product) =>
  //     product.id !== action.payload ? { ...product, isFav: false } : product
  //   );
  // .addCase(actionAddProductToFav.fulfilled, (state, action) => {
  //   console.log('add', action.payload);
  //   state.allProducts.push(action.payload.product_id);
  // })
  // .addCase(actionDeleteFav.fulfilled, (state, action) => {
  //   state.allProducts.filter(
  //     (product) => product.id !== action.payload.product_id
  //   );
  // .addCase(actionAddProductToFav.fulfilled, (state, action) => {
  //   console.log('add', state.allProducts[0].name);
  //   state.allProducts.id = action.payload;
  //   state.allProducts[0].isFav = true;
  // })
  // .addCase(actionDeleteFav.fulfilled, (state, action) => {
  //   console.log('delete', state.allProducts[0].name);
  //   state.allProducts[0].id = action.payload;
  //   state.allProducts[0].isFav = false;
  //   state.error = null;
  // });
  // },
  // });
});

export default productReducer;
