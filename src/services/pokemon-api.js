import axios from 'axios';

//https://pokeapi.co/api/v2/

export const pokemonService = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export const fetchPokemons = async () => {
  const { data } = await pokemonService.get('');
  return data;
};

export const fetchPokemonByName = async name => {
  const { data } = await pokemonService.get(`${name}`);
  return data;
};
