import { useSelector } from 'react-redux';
import Modal from './Modal/Modal';
import PokemonList from './PokemonList/PokemonList';

export const App = () => {
  const pokemon = useSelector(state => state.pokemons.pokemonName);

  return (
    <>
      <PokemonList />
      {pokemon && <Modal />}
    </>
  );
};
