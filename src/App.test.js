import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("App", () => {
  it("renders nav component", () => {
    render(<App />);
    const navElement = screen.getByTestId("nav");
    expect(navElement).toBeInTheDocument();
  });

  it("renders homepage component", () => {
    render(<App />);
    const homepageDiv = screen.getByTestId("homepage");
    expect(homepageDiv).toBeInTheDocument();
  });

  it("render the Shop button in the homepage", () => {
    render(<App />);
    const shopButton = screen.getByText("Shop Now!");
    expect(shopButton).toBeInTheDocument();
  });
});
