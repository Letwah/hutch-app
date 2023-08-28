import React from "react";
import "./cart.css";

const EmptyCart = ({ page }) => {
  return (
    <>
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
};

export default EmptyCart;
