import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { pokemonsSlice } from './pokemon-slice';
import { todosApi } from './todos-api';

export const store = configureStore({
  reducer: {
    [pokemonsSlice.name]: pokemonsSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

setupListeners(store.dispatch);
