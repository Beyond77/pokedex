const PokemonButton = ({ handleNextPokemon }) => {
  return (
    <button className="pokedex-btn pokedex-shadow" onClick={handleNextPokemon}>
            Mostrar Pokemon
    </button>
  )
}

export default PokemonButton