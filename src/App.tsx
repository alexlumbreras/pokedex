import React, { useEffect, useState } from "react";
import { PokemonCard } from "components/PokemonCard";
import { Header } from "components/Header/Header";
import { SearchBar } from "components/SearchBar/SearchBar";
import { Footer } from "components/Footer/Footer";
import { Pokemon } from "core/models/Pokemon";
import { pokemonService } from "core/services/pokemonService";
import styles from "./App.module.css"

function App() {

  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSearch = async (searchValue: string) => {
    setIsLoading(true)
    try {
      const searchedPokemon = await pokemonService.getPokemon(searchValue)
      setPokemon(searchedPokemon)
    } catch (error: unknown) {
      setPokemon(undefined)
    }

    setIsLoading(false)
  };

  const getPokemonContent = () => {
    if (isLoading) return <p>Loading data...</p>
    if (!pokemon) return <p>Start searching a pokemon!</p>
    return <PokemonCard {...pokemon} />
  }

  return (
    <div className={styles.wrapper}>
      <Header/>
      <main className={styles.main}>
        <section className={styles.searchWrapper}>
          <SearchBar onSearch={handleSearch} />
        </section>
        {getPokemonContent()}
      </main>
      <Footer/>
    </div>
  );
};

export default App;
