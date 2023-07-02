import { useState } from "react";

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

  // const [fineArtCatalogue, setFineArtCatalogue] = useState(true);
  const [nightMode, setNightMode] = useState(false);

  return (
    <div className={nightMode ? "night" : "day"}>
      <header>
        <button
          onClick={() => {
            setNightMode(!nightMode);
          }}
        >
          toggleDayNight
        </button>
        <button
          onClick={() => {
            localStorage.clear();
          }}
        >
          CLEAR
        </button>
      </header>
      <main>
        <div id="sidenav">
          <h2>SIDENAV</h2>
          {/* <img
            className="logo"
            src="src/assets/images/logos/hutch-logo-new-2021-trans.png"
            alt="logo"
          ></img> */}
          <Nav />
        </div>
      </main>

      {page === "HOME" && <Home />}
      {page === "CONTACT" && <Contact />}
      {page === "FINE_ART" && <FineArt />}
      {page === "ILLUSTRATION" && <Illustration />}
      {page === "CART" && <Cart />}

      <Footer />
    </div>
  );
};

export default App;
