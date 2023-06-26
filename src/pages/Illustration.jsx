import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIllustrationCatalogue,
  addProductToCart,
} from "../features/appSlice";

// import "./Illustration/illustration.css";
const Illustration = () => {
  const illustrationFake = useSelector(selectIllustrationCatalogue);
  const illustration = [...illustrationFake].reverse();
  const dispatch = useDispatch();
  return (
    <>
      <main className="container">
        {illustration.map((item) => {
          console.log(item.images);
          return (
            <section className="illustration card" key={item.id}>
              <div className="details">
                <h1>{item.title}</h1>
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
                <p>{new Date(item.createdTimeStamp).toLocaleDateString()}</p>
              </div>
              <div className="imageContainer">
                {item.images.map((image) => {
                  return <img src={image} alt={item.title} key={image} />;
                })}
              </div>
            </section>
          );
        })}
        <div id="sidenav">SideNav</div>
      </main>
    </>
  );
};

export default Illustration;
