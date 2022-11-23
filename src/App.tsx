import React from "react";
import { Icon } from "./components/Icon/Icon";
import { Tag } from "./components/Tag";
import { Pokeball } from "./components/Icon/icons/Pokeball";
import { SearchIcon } from "./components/Icon/icons/SearchIcon";
import { PokemonCard } from "components/PokemonCard";

function App() {
  const cardData = {
    index: 1,
    name: "Bulbasur",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["grass", "poison"],
    weight: 6.9,
    height: 0.7,
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
  };

  return (
    <main>
      <h1>My Pokedex</h1>
      <Tag color="grass">grass</Tag>
      <Icon icon={Pokeball} />
      <Icon icon={SearchIcon} />
      <PokemonCard {...cardData}></PokemonCard>
    </main>
  );
}

export default App;
