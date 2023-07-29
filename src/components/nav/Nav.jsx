import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import Burger from "../menu/Burger";
import { urlArtInstagram, urlIllustrationInsta } from "../../config";
import { setPage, selectBurgerOpen } from "../../features/appSlice";
import { gsap } from "gsap";
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
        <div className="navItems">
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
              dispatch(setPage("CART"));
            }}
          >
            Cart
          </p>
          <p
            onClick={() => {
              dispatch(setPage("INTRO"));
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
