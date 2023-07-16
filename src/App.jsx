import { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, selectToastContent } from "./features/appSlice";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import FineArt from "./pages/FineArt";
import Illustration from "./pages/Illustration";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
// import Modal from "./components/modal/Modal";

const App = () => {
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
  console.log(theme);
  return (
    <div>
      <ToastContainer />
      {/* {modal && <Modal />} */}
      <section className="container" data-theme={theme}>
        <div className="sidebar">
          <div className="logo">
            <img
              className="logo"
              src="./assets/images/logos/hutch-logo-new-2021-trans.png"
              alt="logo"
            ></img>
          </div>
          <div className="nav">
            <Nav />
            <div>
              <label className="switch">
                <p>Switch Color Mode</p>
                <input
                  className={`switchTheme ${theme}`}
                  type="checkbox"
                  onChange={(e) => {
                    setTheme(e.target.checked ? "dark" : "light");
                  }}
                />
                <span className="slider round"></span>
              </label>

              <button
                className="clear"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                CLEAR
              </button>
            </div>
          </div>
          {/* <div className="social">
            <h1>contact</h1>
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
