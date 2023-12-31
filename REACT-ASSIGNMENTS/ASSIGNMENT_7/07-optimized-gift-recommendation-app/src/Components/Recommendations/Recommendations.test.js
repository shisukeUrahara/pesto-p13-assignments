import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Recommendations from "./Recommendations";

describe("Recommendations Component", () => {
  const mockRecommendations = [
    "Gift Idea 1: A novel for avid readers",
    "Gift Idea 2: A set of gardening tools",
    "Gift Idea 3: A digital drawing tablet",
  ];

  // Test 1: Recommendations renders correctly with given recommendations
  test("renders recommendations correctly", () => {
    render(<Recommendations recommendations={mockRecommendations} />);
    mockRecommendations.forEach((recommendation) => {
      expect(screen.getByText(recommendation)).toBeInTheDocument();
    });
  });

  // Test 2: Check if each recommendation is in a card with the correct class
  test("each recommendation is in a card with the correct class", () => {
    render(<Recommendations recommendations={mockRecommendations} />);
    mockRecommendations.forEach((_, index) => {
      const recommendationCard = screen
        .getByText(mockRecommendations[index])
        .closest(".recommendation-card");
      expect(recommendationCard).toHaveClass(`recommendation-card ${index}`);
    });
  });
});
