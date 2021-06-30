import { render, screen } from "@testing-library/react";
import FavoritesPage from "./FavoritesPage";

describe("FavoritesPage", () => {
  it("renders a list of places with a title and an image", () => {
    render(<FavoritesPage />);

    const title = screen.getAllByRole("heading");
    expect(title).toHaveLength(6);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(5);
  });
});
