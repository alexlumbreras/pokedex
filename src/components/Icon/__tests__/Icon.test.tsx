import { screen, render } from "@testing-library/react";
import { Icon } from "../Icon";
import { Pokeball } from "../icons/Pokeball";
import { SearchIcon } from "../icons/SearchIcon";

describe("Icon", () => {
  it("Renders Pokeball Icon", () => {
    render(<Icon icon={Pokeball} />);

    const pokeball = screen.getByRole("img");

    expect(pokeball).toHaveAttribute("name", "pokeball-icon");
  });
  it("Renders Search Icon", () => {
    render(<Icon icon={SearchIcon} />);

    const searcher = screen.getByRole("img");

    expect(searcher).toHaveAttribute("name", "search-icon");
  });
});
