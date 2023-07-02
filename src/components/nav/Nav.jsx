import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../../features/appSlice";
import "./nav.css";

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="nav">
        <p
          onClick={() => {
            dispatch(setPage("CONTACT"));
          }}
        >
          Contact
        </p>
        <p
          onClick={() => {
            dispatch(setPage("FINE_ART"));
          }}
        >
          Fine Art
        </p>
        <p
          onClick={() => {
            dispatch(setPage("ILLUSTRATION"));
          }}
        >
          Illustration
        </p>
        <p
          onClick={() => {
            dispatch(setPage("SHOP"));
          }}
        >
          Shop
        </p>
        <p
          onClick={() => {
            dispatch(setPage("HOME"));
          }}
        >
          Home
        </p>
      </div>
    </>
  );
};

export default Nav;
