import PokemonButton from './PokemonButton';
import PokedexItem from './PokedexItem';
import TimeDisplayer from './TimeDisplayer';
import { useCountdown } from '../hooks/useCountdown';
import { POKEMON_REMAINING_TIME } from '../utils/pokemonType';
import { memo, useCallback } from 'react';

const PokedexContainer = memo(({ pokemon, getPokemonData }) => {

  const [ remainingTime ] = useCountdown(
    POKEMON_REMAINING_TIME,
    getPokemonData
  );
  
  const handleNextPokemon = useCallback(() => {
    getPokemonData();
  }, []);

  return (
    <div className="pokedex-item center-column" >
          <TimeDisplayer remainingTime={remainingTime} />
          <PokedexItem pokemon={pokemon} /> 
          <PokemonButton handleNextPokemon={handleNextPokemon} />
    </div>
  )
})

export default PokedexContainer