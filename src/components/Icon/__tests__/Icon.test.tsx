import { screen, render } from "@testing-library/react";
import { Icon } from "../Icon";
import { SearchIcon } from "../icons/SearchIcon";

describe("Icon", () => {
  it("Renders Search Icon", () => {
    render(<Icon icon={SearchIcon} />);

    const searcher = screen.getByRole("img");

    expect(searcher).toHaveAttribute("name", "search-icon");
  });
});
