import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "./fineArt/Search";
import Sort from "./fineArt/Sort";
import Availability from "./fineArt/Availabililty";
import Modal from "../components/modal/Modal";
import {
  selectFineArtCatalogue,
  addProductToCart,
  selectSearch,
  selectSort,
  selectAvailability,
  selectModalImage,
  selectIsModalVisible,
  setModalImage,
  setIsModalVisible,
} from "../features/appSlice";
import "./fineArt/fineArt.css";
import { ASC, DESC, AVAIL, SOLD } from "../store/types";

const FineArt = () => {
  const fineArt = useSelector(selectFineArtCatalogue);
  const search = useSelector(selectSearch);
  const sort = useSelector(selectSort);
  const availability = useSelector(selectAvailability);

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
      if (availability === AVAIL) {
        return item.avail === true;
      } else {
        return item.avail === false;
      }
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
          <Availability />
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
                <div
                  className="imageContainer"
                  style={{
                    backgroundImage: `url("${item.image}")`,
                  }}
                >
                  <div className="details">
                    <h2>{item.title}</h2>
                    <h3>{item.medium}</h3>
                    <h3>£{(item.price / 100).toFixed(2)}</h3>
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
                    <button
                      onClick={() => {
                        showModal(item.image);
                      }}
                    >
                      show modal
                    </button>
                  </div>
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
