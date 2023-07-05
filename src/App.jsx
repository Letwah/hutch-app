import { useState } from "react";
import useLocalStorage from "use-local-storage";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectPage } from "./features/appSlice";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import FineArt from "./pages/FineArt";
import Illustration from "./pages/Illustration";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

const App = () => {
  const page = useSelector(selectPage);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  // const [nightMode, setNightMode] = useState(false);

  return (
    <div>
      <section className="container" data-theme={theme}>
        <div className="sidebar">
          <div className="logo">
            <img
              className="logo"
              src="src/assets/images/logos/hutch-logo-new-2021-trans.png"
              alt="logo"
            ></img>
          </div>
          <div className="nav">
            <Nav />
            <div>
              <button className="switchTheme" onClick={switchTheme}>
                Switch to {theme === "light" ? "dark" : "light"}
              </button>

              <button
                onClick={() => {
                  localStorage.clear();
                }}
              >
                CLEAR
              </button>
            </div>
          </div>
          <div className="social">
            <h1>contact</h1>
          </div>
        </div>
        <div className="main-header">
          <h2>MAIN HEADER</h2>
        </div>
        <div className="main-content">
          {page === "HOME" && <Home />}
          {page === "CONTACT" && <Contact />}
          {page === "FINE_ART" && <FineArt />}
          {page === "ILLUSTRATION" && <Illustration />}
          {page === "CART" && <Cart />}
        </div>
        <div className="main-footer">
          <Footer />
        </div>
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
