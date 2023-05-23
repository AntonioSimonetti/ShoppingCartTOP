import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Item(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
    console.log(data);
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="itemDetails">
      <div className="descriptionDiv">
        <h1>{product.title}</h1>
        <img
          className="itemDetailsImg"
          src={product.image}
          alt={`${product.title}`}
        />
        <p className="itemDescription">{product.description}</p>

        <h2 className="itemPrice">{product.price}$</h2>
        <button
          className="itemDetailsButton"
          onClick={() => props.handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
      {props.showMessage && (
        <div className="messageBox">Item added to cart!</div>
      )}
    </div>
  );
}

export default Item;
