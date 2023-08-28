import React, { useState } from "react";
import { validate } from "../../validation";
import { useDispatch } from "react-redux";
import { setToastContent } from "../../features/appSlice";

import { API_KEY } from "../../key";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [userInput, setUserInput] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", API_KEY);
    const res = await validate(userInput, "contactForm");

    if (!res) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (response.success) {
        dispatch(setToastContent("Thanks for getting in touch!"));
      } else {
        console.error("Error from API:", response.message);
      }
      return;
    }
    setErrors(res);
  };

  return (
    <form
      onInput={(e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <p>{errors.name}</p>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <p>{errors.email}</p>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />
        <p>{errors.message}</p>
      </div>
      <button type="submit">Submit</button>
      {/* Dont need this message cos of toastify ....
      
      <div className="contactMsg">
        <p>
          Jimmy will get back to you asap! <br></br>Thanks for getting in touch.
        </p>
      </div> */}
    </form>
  );
};

export default ContactForm;
