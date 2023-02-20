import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonsSlice } from 'redux/pokemon-slice';
import { fetchPokemonsThunk } from 'redux/pokemon-thunk';

const PokemonList = () => {
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsThunk());
  }, [dispatch]);

  const handleClick = name => {
    dispatch(pokemonsSlice.actions.setPokemonNameAction(name));
  };

  return (
    <ul>
      {pokemons.map(pokemon => (
        <li key={pokemon.url} onClick={() => handleClick(pokemon.name)}>
          <p>{pokemon.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default PokemonList;
