import React from "react";
import { Link } from "react-router-dom";
import shopLogo from "./images/shop.svg";
import cartLogo from "./images/cart.svg";
import homeLogo from "./images/home.svg";

function Nav(props) {
  const totalQuantity = props.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav data-testid="nav">
      TOTI.COMPONENTS
      <ul className="nav-links">
        <Link to="/">
          <img className="homeLogo" src={homeLogo} alt="home logo" />
        </Link>
        <Link to="Shop">
          <img className="shopLogo" src={shopLogo} alt="shop logo" />
        </Link>
        <Link to="Cart">
          <div className="cartLogoDiv">
            <img className="cartLogo" src={cartLogo} alt="cart logo" />
            <p className="cartQuantity" data-testid="cart-quantity">
              {totalQuantity}
            </p>
          </div>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
