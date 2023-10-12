import { ColorRing } from "react-loader-spinner";
import { useCountdown } from "../hooks/useCountdown";
import { usePokemon } from "../hooks/usePokemon";
import { POKEMON_REMAINING_TIME, typeColor } from "../utils/pokemonType";
import PokedexContainer from "../components/PokedexContainer";

const PokedexPage = () => {

  const [pokemon, isLoading, error, getPokemonData] = usePokemon();
  const [remainingTime, setRemainingTime] = useCountdown(
    POKEMON_REMAINING_TIME,
    getPokemonData
  );

  const handleNextPokemon = () => {
    getPokemonData();
    setRemainingTime(30);
  };

  if (error) {
    return <div>Something went wrong. Please try again...</div>;
  }

  return (
    <div
      className="pokedex-container center flex-column"
      style={{
        backgroundColor: `${typeColor(pokemon?.types[0].type.name)}`,
      }}
    >
      {isLoading ? (
        <ColorRing
          visible={isLoading}
          height="160"
          width="160"
          wrapperClass="blocks-wrapper"
          colors={["#FFF", "#FFF", "#FFF", "#FFF", "#FFF"]}
        />
      ) : (
        <PokedexContainer pokemon={pokemon} handleNextPokemon={handleNextPokemon} remainingTime={remainingTime} />
      )}
    </div>
  );
};

export default PokedexPage;
