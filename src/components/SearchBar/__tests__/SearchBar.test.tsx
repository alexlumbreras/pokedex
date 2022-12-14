import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "../SearchBar";

const onSearchMock = jest.fn();

describe("Searchbar", () => {
  test("Render Component", () => {
    render(<SearchBar onSearch={onSearchMock} />);

    const searchInput = screen.getByRole("searchbox", { name: "searchbar" });
    const searchIcon = screen.getByRole("img");
    const placeholder = searchInput.getAttribute("placeholder");

    expect(searchInput).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
    expect(placeholder).toBe("Search a Pokemon...");
    // expect(placeholder).toBeInTheDocument();
  });

  test("Send onSearch event", () => {
    render(<SearchBar onSearch={onSearchMock} />);

    const searchInput = screen.getByRole("searchbox", { name: "searchbar" });

    expect(searchInput).toBeInTheDocument();

    userEvent.type(searchInput, "Irrelevant");
    userEvent.type(searchInput, "{enter}");

    expect(onSearchMock).toHaveBeenCalledWith("Irrelevant");
  });
});
