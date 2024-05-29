import { createAction, createReducer } from '@reduxjs/toolkit';
import { Product, User } from '../../@types/types';
import actionGetDataUser from '../thunks/myGardenThunks';

// -- STATE intial et son interface --
interface MyGardenState {
  loading: boolean;
  error: string | null | undefined;
  favProducts: {
    favLegumes: Product[];
    favFruits: Product[];
  };
  userData: {
    address: string;
    city: string;
    email: string;
    firstname: string;
    forecast_alert: boolean;
    id: number | null;
    lastname: string;
    watering_alert: boolean;
    zip_code: string;
    created_at: string;
    updated_at: null;
    is_admin: boolean;
  };
}

const initialState: MyGardenState = {
  favProducts: {
    favLegumes: [],
    favFruits: [],
  },
  userData: {
    address: '',
    city: '',
    email: '',
    firstname: '',
    forecast_alert: false,
    id: 0,
    lastname: '',
    watering_alert: false,
    zip_code: '',
    created_at: '',
    updated_at: null,
    is_admin: false,
  },
  loading: false,
  error: null,
};

const myGardenReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionGetDataUser.fulfilled, (state, action) => {
      // state.favProducts = action.payload.sortedFavProducts;
      state.userData = action.payload.userData;
      console.log('test', state.userData);
      console.log('test2', action.payload.userData);
      state.error = null;
    })
    .addCase(actionGetDataUser.rejected, (state) => {
      state.error = 'Erreur de connexion';
    });
});

export default myGardenReducer;
