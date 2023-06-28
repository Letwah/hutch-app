import React from "react";
import { useSelector } from "react-redux";
import { selectIllustrationCatalogue } from "../features/appSlice";
import "./illustration/illustration.css";
// import illustrationCatalogue from "../store/illustrationCatalogue";

const Illustration = () => {
  const illustration = useSelector(selectIllustrationCatalogue);

  console.log(selectIllustrationCatalogue);
  return (
    <>
      <section className="container">
        <main>
          {illustration.map((item) => {
            console.log(item.images);
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

export default Illustration;
