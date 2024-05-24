import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import potagerReducer from './potager';
import productsReducer from './products';
import tutorielsReducer from './tutoriels';
import meteoReducer from './meteo';

const rootReducer = combineReducers({
  user: userReducer,
  potager: potagerReducer,
  products: productsReducer,
  tutoriels: tutorielsReducer,
  meteo: meteoReducer,
});

export default rootReducer;
