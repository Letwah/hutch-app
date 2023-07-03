import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "./fineArt/Search";
import Sort from "./fineArt/Sort";
import Availability from "./fineArt/Availabililty";

import {
  selectFineArtCatalogue,
  addProductToCart,
  selectSearch,
  selectSort,
  selectAvailability,
} from "../features/appSlice";
import "./fineArt/fineArt.css";
import { ASC, DESC, AVAIL, SOLD } from "../store/types";

const FineArt = () => {
  const fineArt = useSelector(selectFineArtCatalogue);
  const search = useSelector(selectSearch);
  const sort = useSelector(selectSort);
  const availability = useSelector(selectAvailability);

  // console.log(setSort);

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

  //
  console.log(sort);
  // /sort by asc/dec
  if (sort === ASC) {
    filtered.sort((itemOne, itemTwo) => {
      console.log(itemOne);
      if (itemOne.price > itemTwo.price) return 1;
      if (itemOne.price < itemTwo.price) return -1;
    });
  } else if (sort === DESC) {
    filtered.sort((itemOne, itemTwo) => {
      if (itemOne.price > itemTwo.price) return -1;
      if (itemOne.price < itemTwo.price) return 1;
    });
  }

  console.log(availability);
  //YEY IT WORKS!!!!!!
  if (availability) {
    filtered = fineArt.filter((item) => {
      console.log(item.avail);
      if (availability === SOLD) {
        return item.avail === false;
      } else {
        return item.avail === true;
      }
    });
  }

  return (
    <>
      <section className="container">
        <main>
          <Search />
          <Sort />
          <Availability />

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
                  {/* //add an onClick here for zoom or something */}
                  <img src={item.image} alt={item.title} key={item.image}></img>
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

//multiple images  {item.images.map((image) => {
// return <img src={image} alt={item.title} key={image} />;
// })}
