import { memo } from "react";
import { transformToUpperCamelCase } from "../utils/transformToUpperCamelCase";

const PokedexItem = memo(({ pokemon }) => {

  return (
    <>
      <img
        src="/images/pokemonLogo.svg"
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
      
    </>
  );
});

export default PokedexItem;
