import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { urlArtInstagram, urlIllustrationInsta } from "./config";

import getFineArtCatalogue from "./store/fineArtCatalogue";
import getIllustrationCatalogue from "./store/illustrationCatalogue";

import {
  selectPage,
  selectToastContent,
  selectBurgerOpen,
  setBurgerOpen,
  setPage,
  setFineArt,
  setIllustration,
} from "./features/appSlice";

import Contact from "./pages/Contact";
import Intro from "./pages/Intro";
import FineArt from "./pages/FineArt";
import Illustration from "./pages/Illustration";
import Cart from "./pages/Cart";
import About from "./pages/About";

import Nav from "./components/nav/Nav";
import Burger from "./components/menu/Burger";

import { gsap } from "gsap";

const App = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectBurgerOpen);
  const page = useSelector(selectPage);

  let theme = localStorage.getItem("theme");
  theme = theme ? theme : "light";

  const containerRef = useRef(null);
  const sidebarRef = useRef(null);

  const getInitialData = async () => {
    const fineArtItems = await getFineArtCatalogue();
    const illustrationItems = await getIllustrationCatalogue();

    console.log(illustrationItems);
    illustrationItems.forEach((item) => {
      item.images = item.images.split(",");
    });

    console.log(fineArtItems, illustrationItems);
    dispatch(setFineArt(fineArtItems));
    dispatch(setIllustration(illustrationItems));
  };

  useEffect(() => {
    getInitialData();
  }, []);

  const toastContent = useSelector(selectToastContent);
  useEffect(() => {
    if (toastContent) {
      toast(toastContent);
    }
  }, [toastContent]);

  const toggleBurger = () => {
    dispatch(setBurgerOpen());
  };

  const animateMenu = () => {
    if (window.innerWidth < 800) {
      if (isOpen) {
        gsap.to(containerRef.current, {
          duration: 0.3,
          gridTemplateColumns: "1fr 5fr",
        });
        gsap.to(sidebarRef.current, {
          duration: 0.3,
          width: "100vw",
        });
      } else {
        gsap.to(containerRef.current, {
          duration: 0.3,
          gridTemplateColumns: "0fr 5fr",
        });
        gsap.to(sidebarRef.current, {
          duration: 0.3,
          width: "0vw",
        });
      }
    } else {
      if (isOpen) {
        gsap.to(containerRef.current, {
          duration: 0.3,
          gridTemplateColumns: "1fr 5fr",
        });
        gsap.to(sidebarRef.current, {
          duration: 0.3,
          width: "unset",
        });
      } else {
        gsap.to(containerRef.current, {
          duration: 0.3,
          gridTemplateColumns: "0fr 5fr",
        });
        gsap.to(sidebarRef.current, {
          duration: 0.3,
          width: "unset",
        });
      }
    }
  };

  window.addEventListener("resize", () => {
    animateMenu();
  });

  useEffect(() => {
    animateMenu();
  }, [isOpen]);

  return (
    <div>
      <ToastContainer />

      <section className="container" data-theme={theme} ref={containerRef}>
        <div className="burgerMenu" onClick={toggleBurger}>
          <Burger />
        </div>

        <div className="sidebar" ref={sidebarRef}>
          <Nav />
        </div>

        <div className="main-header">
          <div className="header-content">
            <div className="artIcon">
              <a href={urlArtInstagram} rel="noreferrer" target="_blank">
                <img
                  className="artIcon"
                  src="./assets/images/icons/HutchPallet-1.svg"
                  alt="By Hutch Art Instagram"
                ></img>
              </a>
            </div>
            <div
              className="logo"
              onClick={() => {
                dispatch(setPage("INTRO"));
              }}
            >
              <img
                src="./assets/images/logos/JimmyHutch.svg"
                className="logo"
                alt="Logo"
              />
            </div>
            <div className="illustrationIcon">
              <a href={urlIllustrationInsta} rel="noreferrer" target="_blank">
                <img
                  className="illustrationIcon"
                  src="./assets/images/icons/H-pens.svg"
                  alt="By Hutch Illustration Instagram"
                ></img>
              </a>
            </div>
            <div className="switch">
              <label className="switch">
                <input
                  className={`switchTheme ${theme}`}
                  type="checkbox"
                  defaultChecked={theme === "dark"}
                  onChange={(e) => {
                    // setTheme(e.target.checked ? "dark" : "light");

                    console.log(e.target.checked);
                    localStorage.setItem(
                      "theme",
                      e.target.checked ? "dark" : "light"
                    );
                    location.reload();
                    console.log(localStorage.getItem("theme"));
                  }}
                />
                <span className="slider "></span>
              </label>
            </div>
          </div>
        </div>
        <div className="main-content">
          {page === "INTRO" && <Intro />}
          {page === "ABOUT" && <About />}
          {page === "CONTACT" && <Contact />}
          {page === "FINE_ART" && <FineArt />}
          {page === "ILLUSTRATION" && <Illustration />}
          {page === "CART" && <Cart />}
        </div>
      </section>
    </div>
  );
};

export default App;
