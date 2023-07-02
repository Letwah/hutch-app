import React from "react";
import { useSelector } from "react-redux";
import { selectIllustrationCatalogue } from "../features/appSlice";
import "./illustration/illustration.css";

const Illustration = () => {
  const illustration = useSelector(selectIllustrationCatalogue);

  // console.log(illustration);

  //when written filter for implementing rending a project view on illustration as well=
  // if (filtered.length > 1) {
  //   return filtered.map((item) => {
  //     return <p>{item.title}</p>
  //   })
  // }

  return (
    <>
      <section className="container">
        <main>
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
                        src={`src/assets/images/illustration${image}`}
                        alt={item.title}
                        key={image}
                      />
                    );
                  })}
                </div>
              </section>
            );
          })}
        </main>
      </section>
    </>
  );
};

export default Illustration;
