import React from "react";
import { screen, render } from "@testing-library/react";
import { Tag } from "../Tag";

test('Tag component is renderized', () => {
    render(<Tag />);
    const text = screen.getByText(/Creación el componente tag/i)
    expect(text).toBeInTheDocument();
})