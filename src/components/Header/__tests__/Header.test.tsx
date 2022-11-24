import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Header", () => {
  test("Render header title", () => {
    render(<Header />);

    const headerTitle = screen.getByRole("heading", {
      level: 1,
      name: /my pokedex/i,
    });

    expect(headerTitle).toBeInTheDocument();
  });

  test("Render header logo", () => {
    render(<Header />);

    const headerLogo = screen.getByAltText(/pokeball-icon/i);

    expect(headerLogo).toBeInTheDocument();
  });
});
