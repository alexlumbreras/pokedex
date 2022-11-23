import { render, screen } from "@testing-library/react";
import { PokemonCard } from "../PokemonCard";

const CardProps = {
  index: 1,
  name: "Bulbasur",
  imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  types: ["grass", "poison"],
  weight: 6.9,
  height: 0.7,
  description:
    "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
};

describe("PokeCard tests", () => {
  test("Render Pokemon image", () => {
    render(<PokemonCard {...CardProps} />);

    const imageUrl = screen.getAllByRole("img");
    expect(imageUrl[0]).toHaveAttribute(
      "src",
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    );
    expect(imageUrl[0]).toHaveAttribute("alt", "Bulbasur");
    expect(imageUrl[0]).toBeInTheDocument();
  });

  test("Render weight and height icons", () => {
    render(<PokemonCard {...CardProps} />);

    const images = screen.getAllByRole("img");
    const weightIcon = images[1];
    const heightIcon = images[2];

    expect(weightIcon).toHaveAttribute("name", "weight-icon");
    expect(weightIcon).toBeInTheDocument();
    expect(heightIcon).toHaveAttribute("name", "height-icon");
    expect(heightIcon).toBeInTheDocument();
  });

  test("Render Pokemon name and measure data.", () => {
    render(<PokemonCard {...CardProps} />);

    expect(screen.getByText(/bulbasur/i)).toBeInTheDocument();
    expect(screen.getByText(/6\.9 kg/i)).toBeInTheDocument();
    expect(screen.getByText(/0\.7 m/i)).toBeInTheDocument();
  });
});
