import { render, screen } from "@testing-library/react";
import Home from "./HomePage";

describe("PlacesPage", () => {
  it("renders a title and a video", () => {
    render(<Home />);

    const title = screen.getAllByRole("heading");
    expect(title).toHaveLength(6);
    const video = screen.getAllByRole("video");
    expect(video).toHaveLength(5);
  });
});
