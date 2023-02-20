import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonThunk } from 'redux/pokemon-thunk';

const Modal = () => {
  const { pokemon, pokemonName } = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonThunk(pokemonName));
  }, [dispatch, pokemonName]);

  return (
    <div
      style={{
        height: '100vh',
        width: '70vw',
        position: 'fixed',
        top: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={pokemon?.sprites?.front_default}
        alt={pokemon?.name}
        width="300"
      ></img>
      <p>{pokemon?.name}</p>
    </div>
  );
};
export default Modal;
