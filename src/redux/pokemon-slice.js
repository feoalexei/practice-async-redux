import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemonsThunk, fetchPokemonThunk } from './pokemon-thunk';

const handlePending = state => {
  state.loading = true;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: [],
    pokemonName: '',
    pokemon: null,
    error: '',
    loading: false,
  },
  reducers: {
    setPokemonNameAction(state, { payload }) {
      return { ...state, pokemonName: payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPokemonsThunk.pending, handlePending)
      .addCase(fetchPokemonsThunk.fulfilled, (state, { payload }) => {
        state.pokemons = payload;
        state.loading = false;
      })
      .addCase(fetchPokemonsThunk.rejected, handleRejected)

      //Pokemon one
      .addCase(fetchPokemonThunk.pending, handlePending)
      .addCase(fetchPokemonThunk.fulfilled, (state, { payload }) => {
        state.pokemon = payload;
        state.loading = false;
      })
      .addCase(fetchPokemonThunk.rejected, handleRejected);
  },
});
