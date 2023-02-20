import { fetchPokemonByName, fetchPokemons } from 'services/pokemon-api';
import { pokemonsSlice } from './pokemon-slice';

export const fetchPokemonsThunk = () => async dispatch => {
  try {
    const { results } = await fetchPokemons();
    dispatch(pokemonsSlice.actions.setPokemonsAction(results));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchPokemonThunk = name => async dispatch => {
  try {
    const response = await fetchPokemonByName(name);
    dispatch(pokemonsSlice.actions.setPokemonAction(response));
  } catch (error) {
    console.log(error.message);
  }
};

// CreateAsyncThunk
