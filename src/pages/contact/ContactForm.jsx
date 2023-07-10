import React, { useState } from "react";
import { validate } from "../../validation";
import { useDispatch } from "react-redux";
import { setToastContent } from "../../features/appSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  // const contactForm = useSelector(selectContactForm);

  const [errors, setErrors] = useState({});

  const [userInput, setUserInput] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await validate(userInput, "contactForm");

    if (!res) {
      //do something with form - when we got backend
      dispatch(setToastContent("hello thanks spspdowj"));
      return;
    }
    setErrors(res);
    // console.log(res);
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
      <button type="submit">submit</button>
    </form>
  );
};

export default ContactForm;
