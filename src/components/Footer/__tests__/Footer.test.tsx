import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
  test("Reder Footer component", () => {
    render(<Footer />);

    const githubLogo = screen.getByAltText("Github Logo");
    const pokeapiLogo = screen.getByAltText("PokeApi Logo");

    expect(githubLogo).toBeInTheDocument();
    expect(pokeapiLogo).toBeInTheDocument();
  });
});
