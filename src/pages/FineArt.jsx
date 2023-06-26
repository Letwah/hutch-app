import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFineArtCatalogue } from "../features/appSlice";

import "./fineArt/fineArt.css";
const FineArt = () => {
  const fineArt = useSelector(selectFineArtCatalogue);

  return (
    <>
      <main className="container">
        {fineArt.map((item) => {
          console.log(item.images);
          return (
            <section className="fineArt card" key={item.id}>
              <div className="details">
                <h1>{item.title}</h1>
                {item.avail ? <button>buy</button> : <p>sold</p>}
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
      </main>
      <div id="sidenav">SideNav</div>
    </>
  );
};

export default FineArt;
