import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Burger from "../menu/Burger";
import { ReactSVG } from "react-svg";
import { urlArtInstagram, urlIllustrationInsta } from "../../config";
import {
  setPage,
  selectBurgerOpen,
  setBurgerOpen,
} from "../../features/appSlice";
// import { gsap } from "gsap";
import "./nav.css";
import {
  INTRO,
  FINE_ART,
  CART,
  ILLUSTRATION,
  CONTACT,
  ABOUT,
} from "../../store/types";

const Nav = () => {
  const isOpen = useSelector(selectBurgerOpen);
  const dispatch = useDispatch();

  //router
  useEffect(() => {
    const pages = [INTRO, FINE_ART, CART, ILLUSTRATION, CONTACT, ABOUT];
    const uRLParts = location.href.split("/");
    console.log(uRLParts[uRLParts.length - 1].toUpperCase());

    const page = uRLParts[uRLParts.length - 1].toUpperCase();
    if (pages.includes(page)) {
      dispatch(setPage(page));
    }
  }, []);

  return (
    <>
      <div className="nav">
        <div className="artIcon">
          <picture>
            <source
              srcSet="./assets/images/icons/HutchPalletwhite.png"
              media="prefers-color-scheme: dark"
            />
            <a href={urlArtInstagram} target="_blank">
              <img
                className="artIcon"
                src="./assets/images/icons/HutchPallet-1.svg"
                alt="By Hutch Art Instagram"
              ></img>
            </a>
          </picture>
        </div>
        <div className="navPageLinks">
          <p
            onClick={() => {
              dispatch(setPage("ABOUT"));
              window.history.pushState("About", "About", "/About");
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
              window.history.pushState("Contact", "Contact", "/Contact");
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
              window.history.pushState("Fine_Art", "Fine Art", "/Fine_Art");
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
              window.history.pushState(
                "Illustration",
                "Illustration",
                "/Illustration"
              );
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
              window.history.pushState("Cart", "Cart", "/Cart");
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
              window.history.pushState("Intro", "Intro", "/Intro");
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
            <ReactSVG src="./assets/images/icons/H-pens.svg" />
            {/* <img
              className="illustrationIcon"
              src="./assets/images/icons/H-pens.svg"
              alt="By Hutch Illustration Instagram"
            ></img> */}
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
