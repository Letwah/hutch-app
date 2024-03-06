// import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "./fineArt/Search";
import Sort from "./fineArt/Sort";
import Sold from "./fineArt/Sold";
import SortByDate from "./fineArt/SortByDate";
import Modal from "../components/modal/Modal";
import {
  selectFineArtCatalogue,
  addProductToCart,
  selectSearch,
  selectSort,
  selectSold,
  selectSortByDate,
  selectModalImage,
  selectIsModalVisible,
  setModalImage,
  setIsModalVisible,
} from "../features/appSlice";
import "./fineArt/fineArt.css";
import { ASC, DESC, SOLD } from "../store/types";

const FineArt = () => {
  const fineArt = useSelector(selectFineArtCatalogue);
  const search = useSelector(selectSearch);
  const sort = useSelector(selectSort);
  const sold = useSelector(selectSold);
  const sortByDate = useSelector(selectSortByDate);
  const modalImage = useSelector(selectModalImage);
  const isModalVisible = useSelector(selectIsModalVisible);
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

  // console.log(sold);
  // //sort by sold / not sold
  // if (sold) {
  //   filtered = fineArt.filter((item) => {
  //     if (sold === SOLD) {
  //       return item.sold == false; // sql 1 = true hence loose comparison
  //     } else {
  //       return item.sold == true;
  //     }
  //   });
  // }

  console.log(sold);
  // Sort by sold / not sold
  if (sold) {
    filtered = fineArt.filter((item) => {
      if (sold === SOLD) {
        return item.sold == true; // Return items that are sold
      } else {
        return item.sold == false; // Return items that are not sold
      }
    });
  }

  console.log(sortByDate);
  // /sort by asc/dec
  if (sortByDate === ASC) {
    filtered.sort((itemOne, itemTwo) => {
      console.log(itemOne);
      if (itemOne.date > itemTwo.date) return 1;
      if (itemOne.date < itemTwo.date) return -1;
    });
  } else if (sortByDate === DESC) {
    filtered.sort((itemOne, itemTwo) => {
      if (itemOne.date > itemTwo.date) return -1;
      if (itemOne.date < itemTwo.date) return 1;
    });
  }

  const showModal = (image) => {
    dispatch(setIsModalVisible(true));
    dispatch(setModalImage(image));
  };

  const closeModal = () => {
    dispatch(setIsModalVisible(false));
  };

  return (
    <>
      {isModalVisible && (
        <Modal
          visible={isModalVisible}
          close={closeModal}
          modalImage={modalImage}
        />
      )}
      <section className="fineArtContainer">
        <div className="filters">
          <Search />
          <Sort />
          <Sold />
          <SortByDate />
        </div>
        <div className="fineArtGrid">
          {filtered.map((item) => {
            console.log(`url("${item.image}")`);
            if (!item.show) {
              //prevents item with show = false being rendered
              return;
            }
            return (
              <section className="fineArt card" key={item.id}>
                <img
                  className="imageContainer"
                  loading="lazy"
                  src={`./assets/images/fineArt${item.image}`}
                  onClick={() => {
                    showModal("./assets/images/fineArt" + item.image);
                  }}
                ></img>
                <div className="details">
                  <h2>{item.title}</h2>
                  <h3>{item.medium}</h3>
                  <p>
                    {item.date}, {item.size}
                  </p>

                  {item.sold ? <h3>£{(item.price / 100).toFixed(2)}</h3> : null}

                  {item.sold ? (
                    <button
                      onClick={() => {
                        dispatch(addProductToCart(item.id));
                      }}
                    >
                      Purchase Enquiry
                    </button>
                  ) : (
                    <p className="sold">SOLD</p>
                  )}

                  {/* 
                  <button
                    onClick={() => {
                      showModal("./assets/images/fineArt" + item.image);
                    }}
                  >
                    detailed view
                  </button> */}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FineArt;

//multiple images  {item.images.map((image) => {
// return <img src={image} alt={item.title} key={image} />;
// })}

// <img src={item.image} alt={item.title} key={item.image}></img>
