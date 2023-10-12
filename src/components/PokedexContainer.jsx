import PokemonButton from './PokemonButton';
import PokedexItem from './PokedexItem';
import TimeDisplayer from './TimeDisplayer';

const PokedexContainer = ({ pokemon, handleNextPokemon, remainingTime }) => {
    
  return (
    <div className="pokedex-item center-column" >
          <TimeDisplayer remainingTime={remainingTime} />
          <PokedexItem pokemon={pokemon} /> 
          <PokemonButton handleNextPokemon={handleNextPokemon} />
    </div>
  )
}

export default PokedexContainer