import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "./fineArt/Search";
import Sort from "./fineArt/Sort";
import Sold from "./fineArt/Sold";
import SortByDate from "./fineArt/SortByDate";
import Modal from "../components/modal/Modal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let filtered = [...fineArt];

  // Apply search filter if a search term is present
  if (search) {
    filtered = filtered.filter((item) => {
      const values = Object.values(item).toString().toLowerCase();
      return values.includes(search.toLowerCase());
    });
  }

  console.log(sold);
  //sort by sold / not sold
  if (sold) {
    filtered = filtered.filter((item) => {
      //changed from fineArt.filter because of other filters not working in conjunction
      if (sold === SOLD) {
        return item.sold == false; // sql 1 = true hence loose comparison
      } else {
        return item.sold == true;
      }
    });
  }

  // Apply price sorting if a sort option is selected
  if (sort === ASC) {
    filtered.sort((itemOne, itemTwo) => itemOne.price - itemTwo.price);
  } else if (sort === DESC) {
    filtered.sort((itemOne, itemTwo) => itemTwo.price - itemOne.price);
  }

  // Apply date sorting if a date sort option is selected
  if (sortByDate === ASC) {
    filtered.sort(
      (itemOne, itemTwo) => new Date(itemOne.date) - new Date(itemTwo.date)
    );
  } else if (sortByDate === DESC) {
    filtered.sort(
      (itemOne, itemTwo) => new Date(itemTwo.date) - new Date(itemOne.date)
    );
  }

  const showModal = (image) => {
    dispatch(setIsModalVisible(true));
    dispatch(setModalImage(image));
  };

  const closeModal = () => {
    dispatch(setIsModalVisible(false));
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".fineArtGrid .fineArt",
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        stagger: 0.25,
        duration: 0.4,
        y: 0,
        scrollTrigger: {
          trigger: ".fineArtGrid",
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }, [filtered]);

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
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(addProductToCart(item.id));
                      }}
                    >
                      Purchase Enquiry
                    </button>
                  ) : (
                    <p className="sold">SOLD</p>
                  )}
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
