import { pokemonService } from "../pokemonService";
import { mappedBulbasur } from "../__fixtures__/mappedBulbasaur";

describe("Pokemon Service", () => {
  test("Return a Pokemon", async () => {
    const searchedPokemon = await pokemonService.getPokemon("bulbasaur");

    expect(searchedPokemon).toEqual(mappedBulbasur);
  });

  test("Throws an error getting invalid name Pokemon", async () => {
    const searchedPokemon = pokemonService.getPokemon("fake");

    await expect(searchedPokemon).rejects.toThrow("Invalid pokemon");
  });
});
