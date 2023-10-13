import { memo } from "react";

const PokemonButton = memo(({ handleNextPokemon }) => {

  return (
    <button className="pokedex-btn pokedex-shadow" onClick={handleNextPokemon}>
      Mostrar Pokemon
    </button>
  )
})

export default PokemonButton