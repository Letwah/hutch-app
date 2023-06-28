import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFineArtCatalogue, addProductToCart } from "../features/appSlice";
import "./fineArt/fineArt.css";

const FineArt = () => {
  const fineArt = useSelector(selectFineArtCatalogue);
  const dispatch = useDispatch();
  return (
    <>
      <section className="container">
        <main>
          {fineArt.map((item) => {
            console.log(item.show);
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
