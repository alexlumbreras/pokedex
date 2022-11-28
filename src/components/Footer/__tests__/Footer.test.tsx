import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
  test("Reder Footer component", () => {
    render(<Footer />);

    const footerGitImage = screen.getByAltText("Github Logo");
    const footerApiImage = screen.getByAltText("PokeApi Logo");

    expect(footerGitImage).toBeInTheDocument();
    expect(footerApiImage).toBeInTheDocument();
  });
});
