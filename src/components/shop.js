import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import githubLogo from "./images/gitHubLogo.svg";

function Shop(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [products, setProducts] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const items = await data.json();
    setProducts(items);
    console.log(items);
  };

  const truncateTitle = (title) => {
    const maxLength = 20;
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    } else {
      return title;
    }
  };

  return (
    <div className="shop" data-testid="shop">
      <div className="itemList">
        {products.map((items, index) => (
          <div
            key={items.id}
            className="card"
            data-testid={`shop-product-${index}`}
          >
            <Link to={`/shop/${items.id}`}>
              <h1 className="cardTitle">{truncateTitle(items.title)}</h1>
            </Link>
            <div className="imageDiv">
              <img
                className="cardImg"
                src={items.image}
                alt={`${items.title}`}
              />
            </div>
            <h2 className="cardPrice">{items.price}$</h2>
            <button
              className="shopButton"
              onClick={() => props.handleAddToCart(items)}
              data-testid={`shop-button-product-${index}`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {props.showMessage && (
        <div className="messageBox">Item added to cart!</div>
      )}
      <div className="footerHomepage">
        <p>Created by: Totino</p>
        <a href="https://github.com/AntonioSimonetti">
          <img src={githubLogo} alt="GitHub logo" className="githubLogo" />
        </a>
      </div>
    </div>
  );
}

export default Shop;
