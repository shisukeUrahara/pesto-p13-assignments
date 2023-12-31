import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import GiftForm from "./GiftForm";

// Mock axios to prevent actual API calls
jest.mock("axios");

describe("GiftForm Component", () => {
  beforeEach(() => {
    axios.post.mockClear();
  });

  it("renders the form", () => {
    render(<GiftForm />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("allows entering and submitting data", async () => {
    axios.post.mockResolvedValue({
      data: { choices: [{ text: "1. Gift Idea\n2. Another Gift Idea" }] },
    });

    render(<GiftForm />);

    fireEvent.change(screen.getByPlaceholderText("Add interest"), {
      target: { value: "Music" },
    });
    fireEvent.keyPress(screen.getByPlaceholderText("Add interest"), {
      key: "Enter",
      code: "Enter",
    });
    fireEvent.change(screen.getByRole("combobox", { name: "gender" }), {
      target: { value: "Female" },
    });
    fireEvent.change(screen.getByRole("combobox", { name: "age" }), {
      target: { value: "25" },
    });
    fireEvent.click(
      screen.getByRole("button", { name: /get recommendations/i })
    );

    await waitFor(() => {
      expect(screen.getByText("Gift Idea")).toBeInTheDocument();
      expect(screen.getByText("Another Gift Idea")).toBeInTheDocument();
    });
  });

  it("displays loader while fetching data", async () => {
    axios.post.mockResolvedValue({
      data: { choices: [{ text: "1. Gift Idea\n2. Another Gift Idea" }] },
    });

    render(<GiftForm />);

    fireEvent.click(
      screen.getByRole("button", { name: /get recommendations/i })
    );

    expect(screen.getByText("Fetching Recommendations")).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.queryByText("Fetching Recommendations")
      ).not.toBeInTheDocument();
    });
  });

  it("handles API errors gracefully", async () => {
    axios.post.mockRejectedValue(new Error("API Error"));

    render(<GiftForm />);

    fireEvent.click(
      screen.getByRole("button", { name: /get recommendations/i })
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          "An error occurred while fetching recommendations. Please try again."
        )
      ).toBeInTheDocument();
    });
  });

  it("updates state correctly when new interest is added", () => {
    render(<GiftForm />);

    const newInterestInput = screen.getByPlaceholderText("Add interest");
    fireEvent.change(newInterestInput, { target: { value: "Art" } });
    fireEvent.keyPress(newInterestInput, { key: "Enter", code: "Enter" });

    expect(screen.getByText("Art")).toBeInTheDocument();
  });

  it("removes an interest when the remove button is clicked", () => {
    render(<GiftForm />);

    const newInterestInput = screen.getByPlaceholderText("Add interest");
    fireEvent.change(newInterestInput, { target: { value: "Art" } });
    fireEvent.keyPress(newInterestInput, { key: "Enter", code: "Enter" });

    fireEvent.click(screen.getByText("×"));

    expect(screen.queryByText("Art")).not.toBeInTheDocument();
  });

  // Additional tests can be written for checking the select options, testing more edge cases, etc.
});
