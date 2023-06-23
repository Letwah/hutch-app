import { useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setPage } from "./features/appSlice";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import FineArt from "./pages/FineArt";
import Illustration from "./pages/Illustration";
import Shop from "./pages/Shop";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

const App = () => {
  const page = useSelector(selectPage);

  return (
    <>
      <Nav />

      {page === "HOME" && <Home />}
      {page === "CONTACT" && <Contact />}
      {page === "FINE_ART" && <FineArt />}
      {page === "ILLUSTRATION" && <Illustration />}
      {page === "SHOP" && <Shop />}

      <Footer />
    </>
  );
};

export default App;
