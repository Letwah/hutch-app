import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import Burger from "../menu/Burger";
import { urlArtInstagram, urlIllustrationInsta } from "../../config";
import {
  setPage,
  selectBurgerOpen,
  setBurgerOpen,
} from "../../features/appSlice";
// import { gsap } from "gsap";
import "./nav.css";

const Nav = () => {
  const isOpen = useSelector(selectBurgerOpen);
  const dispatch = useDispatch();

  return (
    <>
      <div className="nav">
        <div className="artIcon">
          <a href={urlArtInstagram} target="_blank">
            <img
              className="artIcon"
              src="./assets/images/icons/HutchPallet-1.svg"
              alt="By Hutch Art Instagram"
            ></img>
          </a>
        </div>
        <div className="navPageLinks">
          <p
            onClick={() => {
              dispatch(setPage("ABOUT"));
              if (window.innerWidth < 800) {
                dispatch(setBurgerOpen());
              }
            }}
          >
            About
          </p>
          <p
            onClick={() => {
              dispatch(setPage("CONTACT"));
              if (window.innerWidth < 800) {
                dispatch(setBurgerOpen());
              }
            }}
          >
            Contact
          </p>
          <p
            onClick={() => {
              dispatch(setPage("FINE_ART"));
              if (window.innerWidth < 800) {
                dispatch(setBurgerOpen());
              }
            }}
          >
            Fine Art
          </p>
          <p
            onClick={() => {
              dispatch(setPage("ILLUSTRATION"));
              if (window.innerWidth < 800) {
                dispatch(setBurgerOpen());
              }
            }}
          >
            Illustration
          </p>
          <p
            onClick={() => {
              dispatch(setPage("CART"));
              if (window.innerWidth < 800) {
                dispatch(setBurgerOpen());
              }
            }}
          >
            Cart
          </p>
          <p
            onClick={() => {
              dispatch(setPage("INTRO"));
              if (window.innerWidth < 800) {
                dispatch(setBurgerOpen());
              }
            }}
          >
            Home
          </p>
        </div>
        <div className="illustrationIcon">
          <a href={urlIllustrationInsta} target="_blank">
            <img
              className="illustrationIcon"
              src="./assets/images/icons/H-pens.svg"
              alt="By Hutch Illustration Instagram"
            ></img>
          </a>
        </div>
      </div>
      {/* <div className="social">
        <h1>social</h1>
      </div> */}
    </>
  );
};

export default Nav;
