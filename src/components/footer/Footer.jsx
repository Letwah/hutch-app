import React from "react";
import { useDispatch } from "react-redux";
const Footer = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2
        onClick={() => {
          dispatch(setPage("INSTAGRAM_ILLUSTRATION"));
        }}
      >
        Illustration Instagram
      </h2>
      <h2
        onClick={() => {
          dispatch(setPage("INSTAGRAM_FINE_ART"));
        }}
      >
        Fine Art Instagram
      </h2>
    </>
  );
};

export default Footer;
