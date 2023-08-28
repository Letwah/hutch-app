import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItemIds,
  selectFineArtCatalogue,
  removeProductFromCart,
  selectPage,
} from "../features/appSlice";

import CartCheckout from "./cart/CartCheckout";

import "./cart/cart.css";
// import EmptyCart from "./cart/EmptyCart";

const Cart = () => {
  const page = useSelector(selectPage);
  const fineArtCatalogue = useSelector(selectFineArtCatalogue);
  const [selectCartCheckout, setSelectCartCheckout] = useState(false);

  const cartItemIds = useSelector(selectCartItemIds);
  const cartItems = fineArtCatalogue.filter((item) => {
    if (cartItemIds.includes(item.id, item.image)) return true;
  });
  // const fineArt = useSelector(selectFineArtCatalogue);
  const dispatch = useDispatch();

  console.log("testing", cartItems);
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price;
  });
  if (cartItems.length === 0) {
    return (
      <>
        {/* <EmptyCart /> */}
        <div
          className="cartContainer"
          style={{
            backgroundImage: `url("./assets/images/fineArt/drawnUp.jpg")`,
          }}
        >
          <div className="cartBox empty">
            <h1>{page}</h1>
            <p>no items in cart &#128529; </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="cartContainer"
        style={{
          backgroundImage: `url("./assets/images/fineArt/drawnUp.jpg")`,
        }}
      >
        <div className="cartBox">
          <h1>{page}</h1>
          {cartItems.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.title} </h2> £{(item.price / 100).toFixed(2)}
                <div>
                  <img
                    className="imageContainerCart"
                    src={`./assets/images/fineArt${item.image}`}
                    loading="lazy"
                  ></img>
                  <button
                    onClick={() => {
                      dispatch(removeProductFromCart(item.id));
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div>
            <p>Total = £{(total / 100).toFixed(2)}</p>
          </div>
          <button
            onClick={() => {
              setSelectCartCheckout(true); // Update state to show CartCheckout
            }}
          >
            Purchase Enquiry
          </button>
          {selectCartCheckout && <CartCheckout />}
          {/* Render CartCheckout if selectCartCheckout is true */}
        </div>
      </div>
    </>
  );
};

export default Cart;
