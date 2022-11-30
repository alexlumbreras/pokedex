import { pokemonService } from "../pokemonService";
import { mappedBulbasur } from "../__fixtures__/mappedBulbasur";

describe("Pokemon Service", () => {
  test("Testing things", async () => {
    const searchedPokemon = await pokemonService.getPokemon("bulbasur");
    console.log(searchedPokemon);

    expect(searchedPokemon).toEqual(mappedBulbasur);
  });
});
