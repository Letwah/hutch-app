import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIllustrationCatalogue,
  selectModalImage,
  selectIsModalVisible,
  setModalImage,
  setIsModalVisible,
} from "../features/appSlice";
import Modal from "../components/modal/Modal";
import "./illustration/illustration.css";

const Illustration = () => {
  const illustration = useSelector(selectIllustrationCatalogue);
  const modalImage = useSelector(selectModalImage);
  const isModalVisible = useSelector(selectIsModalVisible);
  const dispatch = useDispatch();

  //when written filter for implementing rending a project view on illustration as well=
  // if (filtered.length > 1) {
  //   return filtered.map((item) => {
  //     return <p>{item.title}</p>
  //   })
  // }

  const showModal = (image) => {
    dispatch(setIsModalVisible(true));
    dispatch(setModalImage(image));
  };

  const closeModal = () => {
    dispatch(setIsModalVisible(false));
  };

  //check if the component is mounting at right time...
  if (!illustration) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {console.log("Rendering Illustration component")}
      {isModalVisible && (
        <Modal
          visible={isModalVisible}
          close={closeModal}
          modalImage={modalImage}
        />
      )}
      <section className="illustrationContainer">
        <div className="illustration">
          {illustration.map((item) => {
            console.log("Mapping over illustration data:", item);
            // const imageUrls = item.images.split(",").map((url) => url.trim());
            // console.log(`url("${item.image}")`);
            if (!item.show) {
              //prevents item with show = false being rendered
              return;
            }
            return (
              <section className="illustration card" key={item.id}>
                <div className="details">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <p>{item.date}</p>
                  <p>{item.medium}</p>
                </div>
                <div className="imageContainer">
                  {item.images.map((imageUrl) => {
                    // console.log(image);
                    return (
                      <div className="imgDiv" key={imageUrl}>
                        <img
                          onClick={() => {
                            showModal(
                              `./assets/images/illustration${imageUrl}`
                            );
                          }}
                          src={`./assets/images/illustration${imageUrl}`}
                          alt={item.title}
                          key={imageUrl}
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Illustration;
