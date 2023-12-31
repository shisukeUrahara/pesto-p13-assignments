import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Interests from "./Interests";

describe("Interests Component", () => {
  const mockInterests = ["React", "Node.js", "Blockchain"];
  const mockOnRemove = jest.fn();

  // Test 1: Interests renders correctly with given interests
  test("renders interests correctly", () => {
    render(<Interests interests={mockInterests} onRemove={mockOnRemove} />);
    mockInterests.forEach((interest) => {
      expect(screen.getByText(interest)).toBeInTheDocument();
    });
  });

  // Test 2: Check if remove buttons are present for each interest
  test("displays remove button for each interest", () => {
    render(<Interests interests={mockInterests} onRemove={mockOnRemove} />);
    mockInterests.forEach((_, index) => {
      expect(screen.getAllByText("×")[index]).toBeInTheDocument();
    });
  });

  // Test 3: Remove function gets called when an interest's remove button is clicked
  test("calls onRemove when an interest remove button is clicked", () => {
    render(<Interests interests={mockInterests} onRemove={mockOnRemove} />);
    const firstRemoveButton = screen.getAllByText("×")[0];
    fireEvent.click(firstRemoveButton);
    expect(mockOnRemove).toHaveBeenCalledWith(0);
  });
});
