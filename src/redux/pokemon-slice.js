import { createSlice } from '@reduxjs/toolkit';

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemons: [],
    pokemonName: '',
    pokemon: null,
  },
  reducers: {
    setPokemonsAction(state, { payload }) {
      return { ...state, pokemons: payload };
    },
    setPokemonNameAction(state, { payload }) {
      return { ...state, pokemonName: payload };
    },
    setPokemonAction(state, { payload }) {
      state.pokemon = payload;
    },
  },
});
