import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItemIds,
  selectFineArtCatalogue,
  removeProductFromCart,
} from "../features/appSlice";

import "./cart/cart.css";

const Cart = () => {
  const fineArtCatalogue = useSelector(selectFineArtCatalogue);
  const cartItemIds = useSelector(selectCartItemIds);
  const cartItems = fineArtCatalogue.filter((item) => {
    if (cartItemIds.includes(item.id)) return true;
  });
  const dispatch = useDispatch();

  console.log("testing", cartItems);
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price;
  });
  if (cartItems.length === 0) {
    return <p>no items in cart</p>;
  }
  return (
    <>
      {" "}
      <div className="cartContainer">
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              {item.title} £{(item.price / 100).toFixed(2)}
              <button
                onClick={() => {
                  dispatch(removeProductFromCart(item.id));
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
        <div>£{(total / 100).toFixed(2)}</div>

        <button>Checkout</button>
      </div>
    </>
  );
};

export default Cart;
