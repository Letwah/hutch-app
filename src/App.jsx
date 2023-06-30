import { useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setPage, selectSearch } from "./features/appSlice";
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

      <Nav />

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
