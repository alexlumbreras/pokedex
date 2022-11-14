import { screen, render } from "@testing-library/react";
import { Icon } from "../Icon";
import { Pokeball } from "../icons/Pokeball";

describe("Icon", () => {
  it("Renders Icon component", () => {
    render(<Icon icon={Pokeball} />);

    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
  });
});
