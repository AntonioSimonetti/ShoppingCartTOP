import React, { useState } from "react";
import "./App.css";
import Nav from "./components/nav";
import Homepage from "./components/homepage";
import Cart from "./components/cart";
import Shop from "./components/shop";
import Item from "./components/itemDetails";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = (items) => {
    const existingCartItem = cartItems.find((item) => item.id === items.id);
    if (existingCartItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === items.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...items, quantity: 1 }]);
    }
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1500);
  };

  return (
    <Router>
      <div className="App">
        <Nav cartItems={cartItems} data-testid="nav" />
        <Routes>
          <Route exact path="/" element={<Homepage data-testid="homepage" />} />
          <Route
            exact
            path="/Shop"
            element={
              <Shop
                handleAddToCart={handleAddToCart}
                showMessage={showMessage}
                data-testid="shop"
              />
            }
          />
          <Route
            path="/Cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/Shop/:id"
            element={
              <Item
                handleAddToCart={handleAddToCart}
                showMessage={showMessage}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
