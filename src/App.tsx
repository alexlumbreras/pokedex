import React, { useEffect, useState } from "react";
import { PokemonCard } from "components/PokemonCard";
import { Header } from "components/Header/Header";
import { SearchBar } from "components/SearchBar/SearchBar";
import { Footer } from "components/Footer/Footer";
import { Pokemon } from "core/models/Pokemon";
import { pokemonService } from "core/services/pokemonService";
import styles from "./App.module.css"

function App() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isFirstSearch, setIsFirstSearch] = useState<boolean>(true)

  const handleSearch = async (searchValue: string) => {
    setIsLoading(true)
    try {
      const searchedPokemon = await pokemonService.getPokemon(
        searchValue.toLowerCase()
      );
      const newPokemons = [...pokemons, searchedPokemon];
      setPokemons(newPokemons)
      setIsFirstSearch(false)
      console.log(pokemons) //Borrar
    } catch (error: unknown) {
      console.log("Error...")
    }

    setIsLoading(false)
  };

  const getPokemonContent = () => {
    if (isFirstSearch) return (
      <p className= {styles.status}>Write a pokemon name to start!</p>
    )
    if (!pokemons) return (
      <p className={styles.status}>
        Oops, it seems you haven't made a good search... try again!
      </p>
    );
    return (
      <section className= {styles.grid}>
        {pokemons.map((pokemon: Pokemon, index: number) => (
          <PokemonCard key={`pokemon-card-${index}`}{...pokemon} />
        ))}
        {isLoading && <p>Loading...</p>}
      </section>
    );
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
