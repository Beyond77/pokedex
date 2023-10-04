import { useEffect, useState } from "react";
import { getPokemon } from "../services/Pokemon"
import { getRandomNumber } from "../utils/getRandomNumber";
import { POKEMON_LIMIT } from "../utils/pokemonType";

export const usePokemon = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [pokemon, setPokemon] = useState(null);
   
    const getPokemonData = async () => {
        const randomNumber = getRandomNumber(POKEMON_LIMIT);
        setIsLoading(true);
        try {
            const pokemon = await getPokemon(randomNumber);
            setPokemon(pokemon);    
        } catch(err){
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getPokemonData();
    }, [])

    return [
        pokemon, 
        isLoading, 
        error,
        getPokemonData
    ]
}