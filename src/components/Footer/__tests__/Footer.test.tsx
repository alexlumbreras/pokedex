import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
  test("Reder the component", () => {
    render(<Footer />);
  });
});
