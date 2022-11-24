import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Render Header component", () => {
  test("Render header title", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: /my pokedex/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test("Render header logo", () => {
    render(<Header />);

    const pokeballIcon = screen.getByAltText(/pokeball-icon/i);

    expect(pokeballIcon).toBeInTheDocument();
  });
});
