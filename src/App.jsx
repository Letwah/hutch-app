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
import Search from "./pages/fineArt/Search";

const App = () => {
  const page = useSelector(selectPage);
  const [search, setSearch] = useState([]);
  // const [fineArtCatalogue, setFineArtCatalogue] = useState(true);
  const [nightMode, setNightMode] = useState(false);

  // //filter the results
  // let list = [...fineArtCatalogue];

  // if (search) {
  //   list = list.filter((item) => {
  //     return item.fineArtCatalogue[0].description
  //       .toLowerCase()
  //       .includes(search);
  //   });
  // }
  ///sort by asc/dec
  // if (sortByPrice === "asc") {
  //   list.sortByPrice((itemOne, itemTwo) => {
  //     if (itemOne.item.price > itemTwo.item.price) return 1;
  //     if (itemOne.item.price < itemTwo.item.price) return -1;
  //   });
  // } else if (sortByPrice === "desc") {
  //   list.sortByPrice((itemOne, itemTwo) => {
  //     if (itemOne.item.price > itemTwo.item.price) return -1;
  //     if (itemOne.item.price < itemTwo.item.price) return 1;
  //   });
  // }

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
