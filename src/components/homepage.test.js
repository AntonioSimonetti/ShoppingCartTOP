import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "./homepage";
import Shop from "./shop";
import "@testing-library/jest-dom";
import { HashRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const MockHomepage = () => {
  return (
    <HashRouter>
      <Homepage />
    </HashRouter>
  );
};

const MockShop = () => {
  return (
    <HashRouter>
      <Shop />
    </HashRouter>
  );
};

describe("Homepage tests", () => {
  it("render the Shop button in the homepage", () => {
    render(<MockHomepage />);
    const shopButton = screen.getByText("Shop Now!");
    debugger;
    expect(shopButton).toBeInTheDocument();
  });

  it("renders the Shop button in the homepage and navigates to Shop component on click", () => {
    render(
      <>
        <MockHomepage />
        <MockShop />
      </>
    );
    const shopButton = screen.getByText("Shop Now!");
    userEvent.click(shopButton);
    expect(screen.getByTestId("shop")).toBeInTheDocument();
  });
});
