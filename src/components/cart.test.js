import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./cart";

describe("Cart component tests", () => {
  it("renders cart component without errors", () => {
    const cartItems = [
      { id: 1, title: "Item 1", price: 10.0, quantity: 1, image: "image1.jpg" },
      { id: 2, title: "Item 2", price: 20.0, quantity: 2, image: "image2.jpg" },
    ];
    const setCartItems = jest.fn();
    render(<Cart cartItems={cartItems} setCartItems={setCartItems} />);
  });

  it("renders the first cart item", () => {
    const cartItems = [
      { id: 1, title: "Item 1", price: 10.0, quantity: 1, image: "image1.jpg" },
      { id: 2, title: "Item 2", price: 20.0, quantity: 2, image: "image2.jpg" },
    ];
    const setCartItems = jest.fn();
    render(<Cart cartItems={cartItems} setCartItems={setCartItems} />);
    const cartItem = screen.getByTestId("cart-item-0");
    expect(cartItem).toBeInTheDocument();
  });

  it("test subtotal works", () => {
    const cartItems = [
      { id: 1, title: "Item 1", price: 10.0, quantity: 1, image: "image1.jpg" },
      { id: 2, title: "Item 2", price: 20.0, quantity: 2, image: "image2.jpg" },
    ];
    const setCartItems = jest.fn();
    render(<Cart cartItems={cartItems} setCartItems={setCartItems} />);
    const subtotalElement = screen.getByTestId("subtotal");
    expect(subtotalElement).toBeInTheDocument();
  });

  it("increase and decrease button exist in the document", () => {
    const cartItems = [
      { id: 1, title: "Item 1", price: 10.0, quantity: 1, image: "image1.jpg" },
      { id: 2, title: "Item 2", price: 20.0, quantity: 2, image: "image2.jpg" },
    ];
    const setCartItems = jest.fn();
    render(<Cart cartItems={cartItems} setCartItems={setCartItems} />);
    const buttonAdd = screen.getByTestId("button-add-0");
    expect(buttonAdd).toBeInTheDocument();

    const buttonRemove = screen.getByTestId("button-minus-0");
    expect(buttonRemove).toBeInTheDocument();
  });
});
