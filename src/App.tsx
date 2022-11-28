import React from "react";
import { PokemonCard } from "components/PokemonCard";
import { Header } from "components/Header/Header";
import { SearchBar } from "components/SearchBar/SearchBar";
import { Footer } from "components/Footer/Footer";

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

  const handleSearch = (searchValue: string) => {
    console.log(searchValue);
  };

  return (
    <>
      <Header />
      <main>
        <SearchBar onSearch={handleSearch} />
        <PokemonCard {...cardData}></PokemonCard>
      </main>
      <Footer />
    </>
  );
}

export default App;
