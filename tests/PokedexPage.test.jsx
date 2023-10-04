// const { getPokemon } = require("../src/services/Pokemon")
import { usePokemon } from "../src/hooks/usePokemon";
import { fireEvent, render, screen } from "@testing-library/react";
import PokedexPage from "../src/pages/PokedexPage";

jest.mock("../src/hooks/usePokemon");

describe("Test para renderizar <PokedexPage/>", () => {

  test("debe de mostrar la pantalla de error", () => {
    const pokemon = {};

    const isLoading = false;

    const error = true;

    usePokemon.mockReturnValue([pokemon, isLoading, error]);

    render(<PokedexPage />);

    expect(screen.getByText("Something went wrong. Please try again..."));
  });

  test("debe de traer un pokemon", () => {
    const pokemon = {
      name: "bulbasaur",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
      types: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/",
          },
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
    };
    const isLoading = false;
    const error = false;
    const getPokemonData = () => {};

    usePokemon.mockReturnValue([pokemon, isLoading, error, getPokemonData]);

    render(<PokedexPage />);
    expect(screen.getAllByRole("img").length).toBe(2);
    expect(screen.getByText("Bulbasaur"));
  });
});
