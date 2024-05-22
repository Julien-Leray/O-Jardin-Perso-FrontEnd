import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Tutorials, TutorialsState } from '../../types/types';

const initialState: TutorialsState = {
  tuto: [],
  loading: false,
  error: null,
};

export const fetchTutorials = createAsyncThunk<Tutorials[]>(
  'tutos/fetchTutorials',
  async () => {
    return [
      {
        id: 1,
        picture: 'Plantation de courgettes',
        name: 'Planter des courgettes',
        description: 'Étape 1',
      },

      {
        id: 2,
        picture: 'Plantation de tomates',
        name: 'Planter des tomates',
        description: 'Étape 1',
      },
      {
        id: 3,
        picture: 'Plantation de concombre',
        name: 'Planter des concombre',
        description: 'Étape 1',
      },

      {
        id: 4,
        picture: 'Plantation de radis',
        name: 'Planter des radis',
        description: 'Étape 1',
      },
      {
        id: 5,
        picture: 'Plantation de Champignon',
        name: 'Champignon',
        description: 'Étape 1',
      },
    ];
  }
);

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
