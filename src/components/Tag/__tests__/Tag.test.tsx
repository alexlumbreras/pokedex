import { screen, render } from "@testing-library/react";
import { Tag } from "../Tag";

describe("Tag", () => {
  it("Tag (ghost type) component is renderized", () => {
    render(<Tag color="grass">grass</Tag>);

    const tag = screen.getByText(/grass/i);

    expect(tag).toBeInTheDocument();
    expect(tag).toHaveStyle({ backgroundColor: "var(--type-grass)" });
  });
});
