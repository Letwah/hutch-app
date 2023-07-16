import React from "react";
import { useDispatch } from "react-redux";
import "./footer.css";
const Footer = () => {
  const dispatch = useDispatch();

  const urlArtInstagram = "https://www.instagram.com/byhutchart/";
  const urlIllustrationInsta = "https://www.instagram.com/byhutchillo/";
  return (
    <>
      <div className="artIcon">
        <img
          className="artIcon"
          src="./assets/images/icons/palletDark.png"
          alt="By Hutch Art Instagram"
          onClick={() => {
            window.open(urlArtInstagram, "_blank");
          }}
        ></img>
      </div>

      <div className="illustrationIcon">
        <img
          className="illustrationIcon"
          src="./assets/images/icons/penDark.png"
          alt="By Hutch Illustration Instagram"
          onClick={() => {
            window.open(urlIllustrationInsta, "_blank");
          }}
        ></img>
      </div>
    </>
  );
};

export default Footer;

{
  /* 
      <h2
        onClick={() => {
          dispatch(setPage("INSTAGRAM_ILLUSTRATION"));
        }}
      >
        Illustration Instagram
      </h2> */
}
