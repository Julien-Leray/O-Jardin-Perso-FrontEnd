import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Tutorials, TutorialsState } from '../../types/types';
import { fetchTutorials } from '../thunks/tutorielsThunk';

const initialState: TutorialsState = {
  tuto: [],
  loading: false,
  error: null,
};


const tutorialsSlice = createSlice({
  name: 'tutorials',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTutorials.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchTutorials.fulfilled,
        (state, action: PayloadAction<Tutorials[]>) => {
          state.tuto = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchTutorials.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
export default tutorialsSlice.reducer;
