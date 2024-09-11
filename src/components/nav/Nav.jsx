import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { urlColetteSmithDeveloper } from "../../config";
import {
  setPage,
  selectBurgerOpen,
  setBurgerOpen,
} from "../../features/appSlice";
// import { gsap } from "gsap";
import "./Nav.css";
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

  // Set scroll restoration behavior to 'manual' when component mounts
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const navigate = (page, pageUrl) => {
    dispatch(setPage(page));
    window.history.pushState({ page }, page, pageUrl);
    window.scrollTo(0, 0);
    if (window.innerWidth < 800 && isOpen) {
      dispatch(setBurgerOpen(false));
    }
  };

  // console.log(isOpen);

  // //router
  // useEffect(() => {
  //   const pages = [INTRO, FINE_ART, CART, ILLUSTRATION, CONTACT, ABOUT];
  //   const uRLParts = location.href.split("/");
  //   console.log(uRLParts[uRLParts.length - 1].toUpperCase());

  //   const page = uRLParts[uRLParts.length - 1].toUpperCase();
  //   if (pages.includes(page)) {
  //     dispatch(setPage(page));
  //     window.scrollTo(0, 0);
  //   }
  // });

  //attempt to move icons when the burger is shut on dark mode

  return (
    <>
      <div className="nav">
        <div className="navPageLinks">
          <p onClick={() => navigate(INTRO, "/")}>Home</p>
          <p onClick={() => navigate(ABOUT, "/About")}>About</p>
          <p onClick={() => navigate(CONTACT, "/Contact")}>Contact</p>
          <p onClick={() => navigate(FINE_ART, "/Fine_Art")}>Fine Art</p>
          <p onClick={() => navigate(ILLUSTRATION, "/Illustration")}>
            Illustration
          </p>
          <p onClick={() => navigate(CART, "/Cart")}>Cart</p>
          {/* <p
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
          </p> */}
        </div>
        <div className="copyright">
          <a href={urlColetteSmithDeveloper}>© Colette Smith 2024</a>
        </div>
      </div>
    </>
  );
};

export default Nav;
