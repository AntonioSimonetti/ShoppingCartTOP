import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shop from "./shop";
import { HashRouter } from "react-router-dom";

const MockShop = () => {
  return (
    <HashRouter>
      <Shop />
    </HashRouter>
  );
};

describe("Shop components tests", () => {
  it("renders the shop component", () => {
    render(<Shop />);
    const shopElement = screen.getByTestId("shop");
    expect(shopElement).toBeInTheDocument();
  });

  it("renders the shop product with 0 index", async () => {
    render(<MockShop />);
    const shopDivElement = await screen.findByTestId("shop-product-0");
    expect(shopDivElement).toBeInTheDocument();
  });

  it("renders the all the product", async () => {
    render(<MockShop />);
    const shopDivElements = await screen.findAllByTestId(/shop-product/i);
    expect(shopDivElements.length).toBe(6);
  });

  it("renders the all the buttons for each product", async () => {
    render(<MockShop />);
    const shopDivElements = await screen.findAllByTestId(
      /shop-button-product/i
    );
    expect(shopDivElements.length).toBe(6);
  });
});
