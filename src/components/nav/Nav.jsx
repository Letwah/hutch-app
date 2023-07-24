import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Burger from "../menu/Burger";
import { urlArtInstagram, urlIllustrationInsta } from "../../config";
import {
  setPage,
  selectBurgerOpen,
  setBurgerOpen,
} from "../../features/appSlice";
import "./nav.css";

const Nav = () => {
  const burgerOpen = useSelector(selectBurgerOpen);
  const dispatch = useDispatch();

  if (!burgerOpen) return null;

  return (
    <>
      <div className="nav">
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
              dispatch(setPage("HOME"));
            }}
          >
            Home
          </p>
        </div>
      </div>
      <div className="social">
        <h1>social</h1>
        <div className="socialIcons">
          <div className="artIcon">
            <a href={urlArtInstagram} target="_blank">
              <img
                className="artIcon"
                src="./assets/images/icons/palletDark.png"
                alt="By Hutch Art Instagram"
              ></img>
            </a>
          </div>

          <div className="illustrationIcon">
            <a href={urlIllustrationInsta} target="_blank">
              <img
                className="illustrationIcon"
                src="./assets/images/icons/penDark.png"
                alt="By Hutch Illustration Instagram"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
