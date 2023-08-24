import { useEffect, useRef } from "react";
// import useLocalStorage from "use-local-storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { urlArtInstagram, urlIllustrationInsta } from "./config";
import { ReactSVG } from "react-svg";
import getFineArtCatalogue from "./store/fineArtCatalogue";
import {
  selectPage,
  selectToastContent,
  selectBurgerOpen,
  setBurgerOpen,
  setPage,
  setFineArt,
} from "./features/appSlice";

import Contact from "./pages/Contact";
import Intro from "./pages/Intro";
import FineArt from "./pages/FineArt";
import Illustration from "./pages/Illustration";
import Cart from "./pages/Cart";
import About from "./pages/About";
// import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Burger from "./components/menu/Burger";

import { gsap } from "gsap";

// import hutchLogo from "./assets/images/logos/JimmyHutch.svg";

const App = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectBurgerOpen);
  const page = useSelector(selectPage);
  // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [theme, setTheme] = useLocalStorage("theme", "light");

  let theme = localStorage.getItem("theme");
  theme = theme ? theme : "light";

  const containerRef = useRef(null);
  const sidebarRef = useRef(null);

  const getInitialData = async () => {
    const items = await getFineArtCatalogue();

    console.log(items);
    dispatch(setFineArt(items));
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
          {/* <div>
            <button
              className="clear"
              onClick={() => {
                localStorage.clear();
              }}
            >
              CLEAR
            </button>
          </div> */}
        </div>

        <div className="main-header">
          <div className="header-content">
            {/* <div className="pageTitle">
             
              <h1>{page}</h1>
            </div> */}
            <div className="artIcon">
              <a href={urlArtInstagram} target="_blank">
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
                height="50"
                viewBox="0 0 3802 585"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M132.6 450C98.2 450 69.8 441.2 47.4 423.6C25.2 406 9.4 382.2 0 352.2L80.4 333C82.2 344 88 353.6 97.8 361.8C107.6 369.8 118 373.8 129 373.8C136.6 373.8 144.7 371.7 153.3 367.5C162.1 363.3 168.4 356.6 172.2 347.4C174.6 341.6 176 334.5 176.4 326.1C176.8 317.7 177 308 177 297V8.99998H259.8V297C259.8 310.8 259.7 322.8 259.5 333C259.5 343.2 258.5 352.8 256.5 361.8C254.7 370.6 251 379.8 245.4 389.4C233.2 410.6 217.3 426 197.7 435.6C178.1 445.2 156.4 450 132.6 450ZM355.617 72V-8.58307e-06H437.217V72H355.617ZM355.617 441V117H437.217V441H355.617ZM917.156 441V249.6C917.156 228.2 912.056 211.6 901.856 199.8C891.856 187.8 877.956 181.8 860.156 181.8C848.756 181.8 838.856 184.5 830.456 189.9C822.056 195.1 815.456 202.5 810.656 212.1C806.056 221.5 803.756 232.4 803.756 244.8L769.556 222C769.556 199.8 774.756 180.2 785.156 163.2C795.756 146.2 809.856 133 827.456 123.6C845.256 114 864.956 109.2 886.556 109.2C923.556 109.2 951.456 120.2 970.256 142.2C989.256 164 998.756 192.6 998.756 228V441H917.156ZM526.556 441V117H598.556V224.4H608.756V441H526.556ZM722.156 441V249.6C722.156 228.2 717.056 211.6 706.856 199.8C696.856 187.8 682.956 181.8 665.156 181.8C648.156 181.8 634.456 187.7 624.056 199.5C613.856 211.1 608.756 226.2 608.756 244.8L574.556 220.8C574.556 199.6 579.856 180.6 590.456 163.8C601.056 147 615.256 133.7 633.056 123.9C651.056 114.1 671.156 109.2 693.356 109.2C718.756 109.2 739.556 114.6 755.756 125.4C772.156 136.2 784.256 150.6 792.056 168.6C799.856 186.6 803.756 206.4 803.756 228V441H722.156ZM1466.77 441V249.6C1466.77 228.2 1461.67 211.6 1451.47 199.8C1441.47 187.8 1427.57 181.8 1409.77 181.8C1398.37 181.8 1388.47 184.5 1380.07 189.9C1371.67 195.1 1365.07 202.5 1360.27 212.1C1355.67 221.5 1353.37 232.4 1353.37 244.8L1319.17 222C1319.17 199.8 1324.37 180.2 1334.77 163.2C1345.37 146.2 1359.47 133 1377.07 123.6C1394.87 114 1414.57 109.2 1436.17 109.2C1473.17 109.2 1501.07 120.2 1519.87 142.2C1538.87 164 1548.37 192.6 1548.37 228V441H1466.77ZM1076.17 441V117H1148.17V224.4H1158.37V441H1076.17ZM1271.77 441V249.6C1271.77 228.2 1266.67 211.6 1256.47 199.8C1246.47 187.8 1232.57 181.8 1214.77 181.8C1197.77 181.8 1184.07 187.7 1173.67 199.5C1163.47 211.1 1158.37 226.2 1158.37 244.8L1124.17 220.8C1124.17 199.6 1129.47 180.6 1140.07 163.8C1150.67 147 1164.87 133.7 1182.67 123.9C1200.67 114.1 1220.77 109.2 1242.97 109.2C1268.37 109.2 1289.17 114.6 1305.37 125.4C1321.77 136.2 1333.87 150.6 1341.67 168.6C1349.47 186.6 1353.37 206.4 1353.37 228V441H1271.77ZM1656.06 585L1718.46 413.4L1719.66 463.8L1578.66 117H1663.26L1758.06 362.4H1738.86L1833.06 117H1914.66L1731.66 585H1656.06ZM2076.96 441V8.99998H2158.56V186.6H2351.76V8.99998H2433.36V441H2351.76V262.8H2158.56V441H2076.96ZM2638.19 450.6C2612.79 450.6 2592.09 446.3 2576.09 437.7C2560.09 429.1 2547.59 418.2 2538.59 405C2529.79 391.8 2523.49 378.1 2519.69 363.9C2515.89 349.5 2513.59 336.4 2512.79 324.6C2511.99 312.8 2511.59 304.2 2511.59 298.8V117H2594.39V270C2594.39 277.4 2594.79 286.9 2595.59 298.5C2596.39 309.9 2598.89 321.4 2603.09 333C2607.29 344.6 2614.09 354.3 2623.49 362.1C2633.09 369.9 2646.59 373.8 2663.99 373.8C2670.99 373.8 2678.49 372.7 2686.49 370.5C2694.49 368.3 2701.99 364.1 2708.99 357.9C2715.99 351.5 2721.69 342.2 2726.09 330C2730.69 317.6 2732.99 301.4 2732.99 281.4L2779.79 303.6C2779.79 329.2 2774.59 353.2 2764.19 375.6C2753.79 398 2738.09 416.1 2717.09 429.9C2696.29 443.7 2669.99 450.6 2638.19 450.6ZM2743.19 441V333.6H2732.99V117H2815.19V441H2743.19ZM3093.43 441C3071.03 445.2 3049.03 447 3027.43 446.4C3006.03 446 2986.83 442.3 2969.83 435.3C2953.03 428.1 2940.23 416.6 2931.43 400.8C2923.43 386 2919.23 371 2918.83 355.8C2918.43 340.4 2918.23 323 2918.23 303.6V27H2999.83V298.8C2999.83 311.4 2999.93 322.8 3000.13 333C3000.53 343 3002.63 351 3006.43 357C3013.63 368.4 3025.13 374.6 3040.93 375.6C3056.73 376.6 3074.23 375.8 3093.43 373.2V441ZM2863.03 180V117H3093.43V180H2863.03ZM3290.85 450C3257.25 450 3228.45 442.5 3204.45 427.5C3180.45 412.5 3162.05 392.1 3149.25 366.3C3136.45 340.5 3130.05 311.4 3130.05 279C3130.05 246.2 3136.65 216.9 3149.85 191.1C3163.25 165.3 3182.05 145 3206.25 130.2C3230.45 115.4 3259.05 108 3292.05 108C3330.25 108 3362.25 117.7 3388.05 137.1C3414.05 156.3 3430.65 182.6 3437.85 216L3356.25 237.6C3351.45 220.8 3343.05 207.7 3331.05 198.3C3319.25 188.9 3305.85 184.2 3290.85 184.2C3273.65 184.2 3259.55 188.4 3248.55 196.8C3237.55 205 3229.45 216.3 3224.25 230.7C3219.05 244.9 3216.45 261 3216.45 279C3216.45 307.2 3222.65 330.1 3235.05 347.7C3247.65 365.1 3266.25 373.8 3290.85 373.8C3309.25 373.8 3323.25 369.6 3332.85 361.2C3342.45 352.8 3349.65 340.8 3354.45 325.2L3437.85 342.6C3428.65 377 3411.25 403.5 3385.65 422.1C3360.05 440.7 3328.45 450 3290.85 450ZM3718.66 441V288C3718.66 280.6 3718.26 271.2 3717.46 259.8C3716.66 248.2 3714.16 236.6 3709.96 225C3705.76 213.4 3698.86 203.7 3689.26 195.9C3679.86 188.1 3666.46 184.2 3649.06 184.2C3642.06 184.2 3634.56 185.3 3626.56 187.5C3618.56 189.7 3611.06 194 3604.06 200.4C3597.06 206.6 3591.26 215.8 3586.66 228C3582.26 240.2 3580.06 256.4 3580.06 276.6L3533.26 254.4C3533.26 228.8 3538.46 204.8 3548.86 182.4C3559.26 160 3574.86 141.9 3595.66 128.1C3616.66 114.3 3643.06 107.4 3674.86 107.4C3700.26 107.4 3720.96 111.7 3736.96 120.3C3752.96 128.9 3765.36 139.8 3774.16 153C3783.16 166.2 3789.56 180 3793.36 194.4C3797.16 208.6 3799.46 221.6 3800.26 233.4C3801.06 245.2 3801.46 253.8 3801.46 259.2V441H3718.66ZM3497.26 441V8.99998H3569.86V231H3580.06V441H3497.26Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="illustrationIcon">
              <a href={urlIllustrationInsta} target="_blank">
                {/* <ReactSVG src="./assets/images/icons/H-pens.svg" /> */}
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
