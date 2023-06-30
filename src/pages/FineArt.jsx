import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "./fineArt/Search";
import Sort from "./fineArt/Sort";
import {
  selectFineArtCatalogue,
  addProductToCart,
  selectSearch,
  selectSortByPrice,
  setSortByPrice,
} from "../features/appSlice";
import "./fineArt/fineArt.css";

const FineArt = () => {
  const fineArt = useSelector(selectFineArtCatalogue);
  const search = useSelector(selectSearch);
  const sortByPrice = useSelector(selectSortByPrice);
  console.log(search, sortByPrice);
  const dispatch = useDispatch();

  let filtered = [...fineArt];
  if (search) {
    filtered = fineArt.filter((item) => {
      const values = Object.values(item).toString();
      console.log(values);
      if (values.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
    });
  }

  // /sort by asc/dec
  if (sortByPrice === "asc") {
    fineArt.sortByPrice((itemOne, itemTwo) => {
      if (itemOne.item.price > itemTwo.item.price) return 1;
      if (itemOne.item.price < itemTwo.item.price) return -1;
    });
  } else if (sortByPrice === "desc") {
    fineArt.sortByPrice((itemOne, itemTwo) => {
      if (itemOne.item.price > itemTwo.item.price) return -1;
      if (itemOne.item.price < itemTwo.item.price) return 1;
    });
  }

  return (
    <>
      <section className="container">
        <main>
          <Search />
          <Sort />
          {filtered.map((item) => {
            // console.log(item.show);
            if (!item.show) {
              //prevents item with show = false being rendered
              return;
            }
            return (
              <section className="fineArt card" key={item.id}>
                <div className="details">
                  <h1>{item.title}</h1>
                  <h2>{item.medium}</h2>
                  {item.avail ? (
                    <button
                      onClick={() => {
                        dispatch(addProductToCart(item.id));
                      }}
                    >
                      buy
                    </button>
                  ) : (
                    <p>sold</p>
                  )}
                  <p>
                    {new Date(item.createdTimeStamp).toLocaleDateString()}
                    {item.size}
                  </p>
                </div>
                <div className="imageContainer">
                  {item.images.map((image) => {
                    return <img src={image} alt={item.title} key={image} />;
                  })}
                </div>
              </section>
            );
          })}
        </main>
        <div id="sidenav">SideNav</div>
      </section>
    </>
  );
};

export default FineArt;
