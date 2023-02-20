import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemonByName, fetchPokemons } from 'services/pokemon-api';

export const fetchPokemonsThunk = createAsyncThunk(
  'pokemons/fetchAllPokemons',
  async (_, thunkAPI) => {
    try {
      const { results } = await fetchPokemons();
      return results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPokemonThunk = createAsyncThunk(
  'pokemons/fetchOnePokemon',
  async (name, thunkAPI) => {
    try {
      const response = await fetchPokemonByName(name);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


