import React from "react";
import { screen, render } from "@testing-library/react";
import { Tag } from "../Tag";

test('Tag (grass type) component is renderized', () => {
    render(<Tag color="grass">Grass</Tag>);

    const tag = screen.getByText(/grass/i);

    expect(tag).toBeInTheDocument();
    expect(tag).toHaveStyle({backgroundColor: 'var(--type-ground)'})
})