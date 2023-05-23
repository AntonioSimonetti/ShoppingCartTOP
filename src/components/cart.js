import React from "react";

function Cart(props) {
  const subtotal = props.cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = props.cartItems
      .map((item) => {
        if (item.id === id) {
          item.quantity = quantity;
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    props.setCartItems(updatedCartItems);
  };
  return (
    <div className="cart">
      {props.cartItems.length === 0 ? (
        <p className="emptyCart">Your cart is empty..</p>
      ) : (
        <>
          {props.cartItems.map((item, index) => (
            <div
              key={item.id}
              className="cartItem"
              data-testid={`cart-item-${index}`}
            >
              <div>
                <img
                  className="cartImages"
                  src={item.image}
                  alt={`${item.title}`}
                />
              </div>
              <div className="cartInfo">
                {item.title}
                <p>Price: {item.price.toFixed(2)}$</p>
                <p>Total: {(item.quantity * item.price).toFixed(2)}$</p>
                <p data-testid={`quantity-${index}`}>
                  Quantity: {item.quantity}
                </p>
                <div className="cartButtonsDiv">
                  <button
                    data-testid={`button-minus-${index}`}
                    className="cartButton"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button
                    data-testid={`button-add-${index}`}
                    className="cartButton"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <p className="subtotal" data-testid={`subtotal`}>
            Subtotal: {subtotal.toFixed(2)}$
          </p>
          <button
            className="checkout"
            onClick={() => {
              alert(
                "Thanks for testing the website.This is just an exercise made for the Odin Project Curriculum"
              );
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
