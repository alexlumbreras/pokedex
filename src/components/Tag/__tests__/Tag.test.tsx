import React from "react";
import { screen, render } from "@testing-library/react";
import { Tag } from "../Tag";

test("Tag (ghost type) component is renderized", () => {
  render(<Tag color="ghost">Ghost</Tag>);

  const tag = screen.getByText(/ghost/i);

  expect(tag).toBeInTheDocument();
  // expect(tag).toHaveStyle({backgroundColor: 'var(--type-ground)'})
});
