import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "./fineArt/Search";
import Sort from "./fineArt/Sort";
import Nav from "../components/nav/Nav";
import {
  selectFineArtCatalogue,
  addProductToCart,
  selectSearch,
  selectSort,
  setSort,
} from "../features/appSlice";
import "./fineArt/fineArt.css";

const FineArt = () => {
  const fineArt = useSelector(selectFineArtCatalogue);
  const search = useSelector(selectSearch);
  const sort = useSelector(selectSort);
  console.log(search, sort);

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

  //********** SORT not working...
  useEffect((e) => {
    setSort();
  });

  // /sort by asc/dec
  if (sort === "asc") {
    fineArt.sort((itemOne, itemTwo) => {
      if (itemOne.item.price > itemTwo.item.price) return 1;
      if (itemOne.item.price < itemTwo.item.price) return -1;
    });
  } else if (sort === "desc") {
    fineArt.sort((itemOne, itemTwo) => {
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
                  <h2>£{(item.price / 100).toFixed(2)}</h2>
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
      </section>
    </>
  );
};

export default FineArt;
