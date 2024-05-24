import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import potagerReducer from './potager';
import productsReducer from './products';
import tutorielsReducer from './tutoriels';
import myGardenReducer from './mygarden';

const rootReducer = combineReducers({
  user: userReducer,
  potager: potagerReducer,
  products: productsReducer,
  tutoriels: tutorielsReducer,
  myGarden: myGardenReducer,
});

export default rootReducer;
