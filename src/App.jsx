import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { urlArtInstagram, urlIllustrationInsta } from "./config";
// import { ReactSVG } from "react-svg";
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
      {/* <ScrollToTop /> */}
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
              <svg
                width="250"
                height="25"
                viewBox="0 0 250 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9004 0.359453V15.3487C17.9004 18.2003 17.0977 20.4289 15.4921 22.0345C13.8865 23.6401 11.61 24.4428 8.66249 24.4428C6.55369 24.4428 4.8403 24.0594 3.5223 23.2926C2.2043 22.5258 1.29369 21.4474 0.790451 20.0575C0.287216 18.6676 0.191362 17.074 0.502888 15.2768L5.31957 14.4141C5.032 16.5229 5.1638 18.0446 5.71497 18.9792C6.26613 19.9137 7.28458 20.381 8.77032 20.381C10.328 20.381 11.4063 19.9017 12.0054 18.9432C12.6285 17.9847 12.94 16.5588 12.94 14.6657V0.359453H17.9004ZM28.6709 0.359453V24.0834H23.7104V0.359453H28.6709ZM60.6467 0.359453V24.0834H56.1896V11.7182L56.4052 4.78073H56.3333L49.7553 24.0834H45.6935L39.1515 4.78073H39.0796L39.3312 11.7182V24.0834H34.838V0.359453H42.0271L46.3046 13.2998L47.8143 18.6556H47.8862L49.4318 13.3357L53.6734 0.359453H60.6467ZM92.6255 0.359453V24.0834H88.1682V11.7182L88.3839 4.78073H88.312L81.734 24.0834H77.6722L71.1301 4.78073H71.0582L71.3099 11.7182V24.0834H66.8167V0.359453H74.0058L78.2833 13.2998L79.793 18.6556H79.8649L81.4105 13.3357L85.6521 0.359453H92.6255ZM117.847 0.359453L109.435 15.2049V24.0834H104.475V15.2049L96.0636 0.359453H101.348L105.158 7.44069L106.955 11.179L108.788 7.44069L112.599 0.359453H117.847ZM151.436 0.359453V24.0834H146.476V0.359453H151.436ZM136.016 0.359453V24.0834H131.055V0.359453H136.016ZM149.064 10.1006V14.0906H133.535V10.1006H149.064ZM177.434 0.359453V14.7376C177.434 17.9727 176.571 20.405 174.846 22.0345C173.12 23.6401 170.604 24.4428 167.297 24.4428C163.99 24.4428 161.474 23.6401 159.749 22.0345C158.023 20.405 157.161 17.9727 157.161 14.7376V0.359453H162.121V14.5219C162.121 16.5109 162.54 17.9847 163.379 18.9432C164.242 19.9017 165.548 20.381 167.297 20.381C169.046 20.381 170.341 19.9017 171.179 18.9432C172.018 17.9847 172.437 16.5109 172.437 14.5219V0.359453H177.434ZM201.911 0.359453V4.34939H193.967V24.0834H189.007V4.34939H181.027V0.359453H201.911ZM225.361 17.5413C224.906 19.075 224.187 20.3571 223.204 21.3875C222.222 22.4179 221.059 23.1848 219.717 23.688C218.376 24.1912 216.902 24.4428 215.296 24.4428C212.948 24.4428 210.911 23.9516 209.185 22.9691C207.484 21.9866 206.166 20.5847 205.231 18.7635C204.321 16.9422 203.866 14.7616 203.866 12.2214C203.866 9.68129 204.321 7.5006 205.231 5.67937C206.166 3.85814 207.484 2.45627 209.185 1.47376C210.911 0.491253 212.924 0 215.224 0C216.854 0 218.328 0.227654 219.646 0.682962C220.964 1.11431 222.078 1.79727 222.988 2.73185C223.923 3.64246 224.606 4.78073 225.037 6.14666L220.544 8.05176C220.137 6.61395 219.514 5.5955 218.675 4.99641C217.836 4.37335 216.758 4.06183 215.44 4.06183C214.146 4.06183 213.008 4.37335 212.025 4.99641C211.067 5.61946 210.324 6.54206 209.797 7.7642C209.269 8.96238 209.006 10.4481 209.006 12.2214C209.006 13.9708 209.245 15.4565 209.725 16.6786C210.228 17.9008 210.959 18.8234 211.917 19.4464C212.876 20.0695 214.05 20.381 215.44 20.381C216.734 20.381 217.848 20.0335 218.783 19.3386C219.741 18.6437 220.412 17.5893 220.796 16.1754L225.361 17.5413ZM249.97 0.359453V24.0834H245.009V0.359453H249.97ZM234.549 0.359453V24.0834H229.589V0.359453H234.549ZM247.597 10.1006V14.0906H232.069V10.1006H247.597Z"
                  fill="black"
                />
              </svg>
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

//alternate way

// const animateMenu = () => {
//   const isSmallScreen = window.innerWidth < 800;
//   const targetColumns = isOpen
//     ? "1fr 5fr"
//     : isSmallScreen
//     ? "0fr 1fr "
//     : "0fr 5fr"; // Modified for both sizes
//   const targetWidth = isOpen && isSmallScreen ? "100vw" : "unset";

//   gsap.to(containerRef.current, {
//     duration: 0.3,
//     gridTemplateColumns: targetColumns,
//   });
//   gsap.to(sidebarRef.current, {
//     duration: 0.3,
//     width: targetWidth,
//   });
// };

//match media attempt {
//   useEffect(() => {
//     let mm = gsap.matchMedia();

//     mm.add("(min-width: 800px)", () => {
//       // desktop setup code here...
//       if (isOpen) {
//         gsap.to(containerRef.current, {
//           duration: 0.3,
//           gridTemplateColumns: "1fr 5fr",
//         });
//       } else {
//         gsap.to(containerRef.current, {
//           duration: 0.3,
//           gridTemplateColumns: "0fr 5fr",
//         });
//       }
//       return () => {
//         mm.removeAll(); // Remove all matchMedia queries when the component unmounts
//       };
//     }, [isOpen]);
//     });

// }
