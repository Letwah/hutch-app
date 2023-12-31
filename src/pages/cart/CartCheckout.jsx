import React, { useState } from "react";
import { validate } from "../../validation";
import { useDispatch } from "react-redux";
import {
  setToastContent,
  setSubmitted,
  setPage,
} from "../../features/appSlice";

import { API_KEY } from "../../key";

const CartCheckout = (props) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [userInput, setUserInput] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", API_KEY);
    const res = await validate(userInput, "contactForm");
    if (!res) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        console.log(response);

        dispatch(setSubmitted(true));
        purchaseEnqFormSubmitted(false);
        dispatch(setToastContent("Thank you for your purchase enquiry!"));
      } catch (error) {
        console.log(error);
      }
    }
    setErrors(!res ? {} : res);
  };

  console.log(props.submitted);
  if (props.submitted) {
    return (
      <>
        <h2>
          The items are reserved and we will be in touch to arrange payment.
          Thank You! &#128578; &#128077;
        </h2>
        <button
          onClick={() => {
            dispatch(setPage("FINE_ART"));
          }}
        >
          Back to Fine Art
        </button>
      </>
    );
  }

  return (
    <>
      <form
        className="purchaseEnq"
        onInput={(e) => {
          setUserInput({ ...userInput, [e.target.name]: e.target.value });
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Name: *</label>
          <input type="text" id="name" name="name" required />
          <p>{errors.name}</p>
        </div>
        <div>
          <label htmlFor="email">Email: *</label>
          <input type="email" id="email" name="email" required />
          <p>{errors.email}</p>
        </div>
        <div>
          <label htmlFor="message">Message: *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Please write the details of the piece / pieces of your you are interested in buying.  "
            required
          />
          <p>{errors.message}</p>
        </div>
        <button type="submit">Submit Enquiry</button>
      </form>
    </>
  );
};

export default CartCheckout;
