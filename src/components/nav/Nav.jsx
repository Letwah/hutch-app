import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../../features/appSlice";

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="nav">
        <button
          onClick={() => {
            dispatch(setPage("CONTACT"));
          }}
        >
          Contact
        </button>
        <button
          onClick={() => {
            dispatch(setPage("FINE_ART"));
          }}
        >
          Fine Art
        </button>
        <button
          onClick={() => {
            dispatch(setPage("ILLUSTRATION"));
          }}
        >
          Illustration
        </button>
        <button
          onClick={() => {
            dispatch(setPage("SHOP"));
          }}
        >
          Shop
        </button>
        <button
          onClick={() => {
            dispatch(setPage("HOME"));
          }}
        >
          Home
        </button>
      </div>
    </>
  );
};

export default Nav;
