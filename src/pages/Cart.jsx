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
import EmptyCart from "./cart/EmptyCart";

const Cart = () => {
  const page = useSelector(selectPage);
  const fineArtCatalogue = useSelector(selectFineArtCatalogue);
  const [showPurchaseEnqForm, purchaseEnqFormSubmitted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const cartItemIds = useSelector(selectCartItemIds);
  const cartItems = fineArtCatalogue.filter((item) => {
    if (cartItemIds.includes(item.id, item.image)) return true;
  });

  const dispatch = useDispatch();

  console.log(cartItems);
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price;
  });
  if (cartItems.length === 0) {
    return (
      <>
        <EmptyCart page={page} />
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

          {!submitted &&
            cartItems.map((item) => {
              return (
                <div key={item.id}>
                  <h2>{item.title} </h2> £{(item.price / 100).toFixed(2)}
                  <div className="cartItemDetails">
                    <img
                      className="imageContainerCart"
                      src={`./assets/images/fineArt${item.image}`}
                      loading="lazy"
                    ></img>
                    <div className="totalRemove">
                      <button
                        className="remove"
                        onClick={() => {
                          dispatch(removeProductFromCart(item.id));
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

          {!showPurchaseEnqForm && (
            <div className="totalBuy">
              <button className="total">
                Total = £{(total / 100).toFixed(2)}
              </button>

              <button
                onClick={() => {
                  purchaseEnqFormSubmitted(true); // Update state to show CartCheckout
                }}
              >
                Purchase Enquiry
              </button>
            </div>
          )}

          {showPurchaseEnqForm && (
            <CartCheckout
              submitted={submitted}
              setSubmitted={setSubmitted}
              onSubmitSuccess={() => purchaseEnqFormSubmitted(false)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
