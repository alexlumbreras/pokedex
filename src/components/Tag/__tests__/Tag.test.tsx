import React from "react";
import { screen, render } from "@testing-library/react";
import { Tag } from "../Tag";

test('Tag component is renderized', () => {
    render(<Tag color="grass">Grass</Tag>);

    const tagText = screen.getByText(/grass/i);

    expect(tagText).toBeInTheDocument();
})