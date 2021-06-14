import { render, screen } from "@testing-library/react";
import PlacesPage from "./PlacesPage";

describe("PlacesPage", () => {
  it("renders a list of places with a title and an image", () => {
    render(<PlacesPage />);

    const title = screen.getAllByRole("heading");
    expect(title).toHaveLength(6);
    const image = screen.getAllByRole("img");
    expect(image).toHaveLength(5);
  });
});
