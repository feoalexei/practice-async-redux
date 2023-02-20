import { configureStore } from '@reduxjs/toolkit';
import { pokemonsSlice } from './pokemon-slice';

export const store = configureStore({
  reducer: {
    [pokemonsSlice.name]: pokemonsSlice.reducer,
  },
});
