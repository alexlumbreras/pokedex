import { Pokemon } from "core/models/Pokemon";
import React from "react";

const mapPokemonData = (pokemonResponse: any): Pokemon => {
  return {
    index: pokemonResponse.id,
    name: pokemonResponse.name,
  };
};

const getPokemon = async (name: string) => {
  const pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  ).then((response) => response.json());

  return mapPokemonData(pokemonResponse);
};

export const pokemonService = {
  getPokemon,
};
