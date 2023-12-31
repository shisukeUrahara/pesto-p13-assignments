import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Toaster from "./Toaster";

describe("Toaster", () => {
  test("does not render without message", () => {
    render(<Toaster message={null} />);
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument(); // Assumes the toaster always contains text when it's rendered
  });

  test("renders correctly with message", () => {
    const message = { type: "success", text: "Success message" };
    render(<Toaster message={message} />);
    expect(screen.getByText(message.text)).toBeInTheDocument();
  });

  test("displays correct text", () => {
    const message = { type: "error", text: "Error message" };
    render(<Toaster message={message} />);
    expect(screen.getByText(message.text)).toBeInTheDocument();
  });

  test("applies correct class based on message type", () => {
    const message = { type: "success", text: "Success message" };
    render(<Toaster message={message} />);
    const toasterElement = screen.getByText(message.text);
    expect(toasterElement).toHaveClass("Toaster", "success");
  });
});
