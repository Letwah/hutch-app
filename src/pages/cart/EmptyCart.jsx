import React, { useState } from "react";

export const EmptyCart = () => {
  const [emptyCart, setEmptyCart] = useState();

  return (
    <>
      <div>{emptyCart}</div>
      <div>
        <p>no items in cart</p>;
      </div>
      <div
        className="cartContainer"
        style={{
          backgroundImage: `url("./assets/images/fineArt/large/drawnUp.jpg")`,
        }}
      ></div>
      <div className="cartBox">
        <h1>{page}</h1>
      </div>
    </>
  );
};
