import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import potagerReducer from './potager';
import productsReducer from './products';
import tutorielsReducer from './tutoriels'

const rootReducer = combineReducers({
  user: userReducer,
  potager: potagerReducer,
  products: productsReducer,
  tutoriels: tutorielsReducer,
});

export default rootReducer;
