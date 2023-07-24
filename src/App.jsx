import { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPage,
  selectToastContent,
  selectBurgerOpen,
  setBurgerOpen,
} from "./features/appSlice";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import FineArt from "./pages/FineArt";
import Illustration from "./pages/Illustration";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

import Burger from "./components/menu/Burger";

// import hutchLogo from "./assets/images/logos/JimmyHutch.svg";

const App = () => {
  const dispatch = useDispatch();
  // const burgerOpen = useSelector(selectBurgerOpen);
  const page = useSelector(selectPage);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const toastContent = useSelector(selectToastContent);
  useEffect(() => {
    if (toastContent) {
      toast(toastContent);
    }
  }, [toastContent]);

  // const switchTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // };
  // const [nightMode, setNightMode] = useState(false);

  const toggleBurger = () => {
    dispatch(setBurgerOpen());
  };

  return (
    <div>
      <ToastContainer />

      <section className="container" data-theme={theme}>
        <div className="sidebar">
          <div className="burgerMenu" onClick={toggleBurger}>
            <Burger />
          </div>

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
          <div className="pageTitle">
            {/* render the page title here */}
            <h1>{page}</h1>
            {/* <img
              className="logo"
              src="./assets/images/logos/hutch-logo-new-2021-trans.png"
              alt="logo"
            ></img> */}
          </div>
          <label className="switch">
            <input
              className={`switchTheme ${theme}`}
              type="checkbox"
              onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
              }}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="main-content">
          {page === "HOME" && <Home />}
          {page === "CONTACT" && <Contact />}
          {page === "FINE_ART" && <FineArt />}
          {page === "ILLUSTRATION" && <Illustration />}
          {page === "CART" && <Cart />}
        </div>
        {/* <div className="main-footer">
          <Footer />
        </div> */}
      </section>
    </div>
  );
};

export default App;

{
  /* <div className={theme ? "night" : "day"}>
              <button
                onClick={() => {
                  setTheme(!theme);
                }}
              >
                toggleDayNight
              </button> */
}
