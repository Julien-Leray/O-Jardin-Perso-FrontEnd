import { createReducer } from '@reduxjs/toolkit';
import { fetchMeteo } from '../thunks/meteoThunk';

const meteoReducer = createReducer({}, (builder) => {
  builder
    .addCase(fetchMeteo.fulfilled, (state, action) => {
      return action.payload;
    })
    .addCase(fetchMeteo.rejected, (state) => {
      return { error: 'La data ne charge pas' };
    });
});

export default meteoReducer;
