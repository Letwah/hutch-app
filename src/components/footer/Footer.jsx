import React from "react";
import { useDispatch } from "react-redux";
const Footer = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(setPage("INSTAGRAM_ILLUSTRATION"));
        }}
      >
        Illustration INstagram
      </button>
      <button
        onClick={() => {
          dispatch(setPage("INSTAGRAM_FINE_ART"));
        }}
      >
        Instagram
      </button>
    </>
  );
};

export default Footer;
