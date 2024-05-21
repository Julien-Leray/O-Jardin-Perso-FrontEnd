import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import potagerReducer from './potager';
import productsReducer from './products';

const rootReducer = combineReducers({
  user: userReducer,
  potager: potagerReducer,
  products: productsReducer,
});

export default rootReducer;
