import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./Loader";

describe("Loader Component", () => {
  // Test 1: Loader renders correctly
  test("renders without crashing", () => {
    render(<Loader />);
    expect(screen.getByText("Fetching Recommendations")).toBeInTheDocument();
  });

  // Test 2: Loader has the correct text
  test("displays the correct text", () => {
    render(<Loader />);
    expect(screen.getByText("Fetching Recommendations")).toHaveTextContent(
      "Fetching Recommendations"
    );
  });

  // Test 3: Loader has the correct class
  test("has the correct class", () => {
    render(<Loader />);
    const loaderElement = screen.getByText("Fetching Recommendations");
    expect(loaderElement).toHaveClass("Loader");
  });
});
