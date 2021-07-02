import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("renders a title and a video", () => {
    render(<HomePage />);

    const title = screen.getAllByRole("heading");
    expect(title).toHaveLength(6);
    const video = screen.getAllByRole("video");
    expect(video).toHaveLength(5);
  });
});
