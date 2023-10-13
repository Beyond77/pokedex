import { ColorRing } from "react-loader-spinner";
import { usePokemon } from "../hooks/usePokemon";
import { typeColor } from "../utils/pokemonType";
import PokedexContainer from "../components/PokedexContainer";

const PokedexPage = () => {

  const [ pokemon, isLoading, error, getPokemonData ] = usePokemon();
 
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
        <PokedexContainer pokemon={pokemon} getPokemonData={getPokemonData}/>
      )}
    </div>
  );
};

export default PokedexPage;
