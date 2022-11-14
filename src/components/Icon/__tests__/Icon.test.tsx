import { screen, render } from "@testing-library/react";
import { Icon } from "../Icon";

it("Renders the Icon component.", () => {
  render(<Icon />);

  const icon = screen.getByRole("img");

  expect(icon).toBeInTheDocument();
});
