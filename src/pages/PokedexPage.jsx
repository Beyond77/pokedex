import { useCountdown } from "../hooks/useCountdown";
import { usePokemon } from "../hooks/usePokemon";
import { getRandomNumber } from "../utils/getRandomNumber";
import { POKEMON_LIMIT, POKEMON_REMAINING_TIME, typeColor } from "../utils/pokemonType";
import { transformToUpperCamelCase } from "../utils/transformToUpperCamelCase";

const PokedexPage = () => {
  const [pokemon, isLoading, error, getPokemonData] = usePokemon();

  const [remainingTime, setRemainingTime] = useCountdown(POKEMON_REMAINING_TIME, getPokemonData);

  const handleNextPokemon = () => {
    getPokemonData();
    setRemainingTime(30);
  }

  if (error) {
    return <div>Something went wrong. Please try again...</div>;
  }

  return (
    <div
      className="pokedex-container center flex-column"
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="pokedex-item center-column" style={{
          backgroundColor: `${typeColor(pokemon?.types[0].type.name)}`,
        }}>
          <img
            src="/src/assets/pokemonLogo.svg"
            alt="pokemon-logo"
            className="pokedex-logo"
          />
          <section className="pokemon-main-section center">
            <div className="pokedex-item-details">
              <p className="pokedex-item-details-number">N.°{pokemon?.id}</p>
              <p className="pokedex-item-details-name">
                {transformToUpperCamelCase(pokemon?.name)}
              </p>
              <ul className="pokedex-item-details-type">
                {pokemon?.types?.map(({ type }) => {
                  return (
                    <li key={type.name}>
                      <span>{type.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <img
              className="pokedex-item-img pokedex-shadow"
              src={pokemon?.sprites.front_default}
              alt="Pokemon image"
            />
          </section>
          <button className="pokedex-btn pokedex-shadow" onClick={handleNextPokemon}>
            Mostrar Pokemon
          </button>
          <span className="pokedex-time">{remainingTime}</span>
        </div>
      )}
    </div>
  );
};

export default PokedexPage;
