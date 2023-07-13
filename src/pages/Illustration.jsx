import React from "react";
import { useSelector } from "react-redux";
import { selectIllustrationCatalogue } from "../features/appSlice";
// import Modal from "../components/modal/Modal";
import "./illustration/illustration.css";

const Illustration = () => {
  const illustration = useSelector(selectIllustrationCatalogue);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [modalImage, setModalImage] = useState();

  // console.log(illustration);

  //when written filter for implementing rending a project view on illustration as well=
  // if (filtered.length > 1) {
  //   return filtered.map((item) => {
  //     return <p>{item.title}</p>
  //   })
  // }

  // const showModal = (image) => {
  //   setIsModalVisible(true);
  //   setModalImage(image);
  // };

  // const closeModal = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <>
      {/* {isModalVisible && (
        <Modal
          visible={isModalVisible}
          close={closeModal}
          modalImage={modalImage}
        />
      )} */}
      <section className="illustrationContainer">
        <div className="illustration">
          {illustration.map((item) => {
            console.log(item.show);
            if (!item.show) {
              //prevents item with show = false being rendered
              return;
            }
            return (
              <section className="illustration card" key={item.id}>
                <div className="details">
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                  <p>
                    {new Date(item.createdTimeStamp).toLocaleDateString()} -
                    {item.medium}
                  </p>
                </div>
                <div className="imageContainer">
                  {item.images.map((image) => {
                    // console.log(image);
                    return (
                      <img
                        // onClick={() => {
                        //   showModal(item.image);
                        // }}
                        src={`/assets/images/illustration${image}`}
                        alt={item.title}
                        key={image}
                      />
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
