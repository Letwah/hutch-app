import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFineArt } from "../features/appSlice";

const FineArt = () => {
  const fineArt = useSelector(selectFineArt);
  return (
    <>
      <p>Fine Art </p>
      {fineArt.map((item) => {
        console.log(item.images);
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            {item.avail ? <button>buy</button> : <p>sold</p>}
            <p>{new Date(item.createdTimeStamp).toLocaleDateString()}</p>
            {item.images.map((image) => {
              return <img src={image} alt={item.title} key={image} />;
            })}
          </div>
        );
      })}
    </>
  );
};

export default FineArt;
