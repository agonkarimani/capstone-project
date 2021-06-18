import { render, screen } from "@testing-library/react";
import PlacesPage from "./PlacesPage";

describe("PlacesPage", () => {
  it("renders a list of places with a title and an image", () => {
    render(<PlacesPage />);

    const title = screen.getAllByRole("heading");
    expect(title).toHaveLength(6);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(5);
  });
});
