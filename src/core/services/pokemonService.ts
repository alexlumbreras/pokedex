import { Pokemon } from "core/models/Pokemon";
import React from "react";

const mapPokemonData = (pokemonResponse: any): Pokemon => {
  return {
    index: pokemonResponse.id,
    name: pokemonResponse.name,
    imageUrl: pokemonResponse.sprites.other["official-artwork"].front_default,
    types: pokemonResponse.types.map(({ type }: any) => type.name),
    height: pokemonResponse.height / 10,
    weight: pokemonResponse.weight / 10,
    description: "Lorem ipsum",
  };
};

const getPokemon = async (name: string) => {
  try {
    const pokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    ).then((response) => response.json());

    return mapPokemonData(pokemonResponse);
  } catch (error: unknown) {
    throw new Error("Invalid pokemon");
  }
};

export const pokemonService = {
  getPokemon,
};
