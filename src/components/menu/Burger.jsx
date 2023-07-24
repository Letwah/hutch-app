import React, { useEffect } from "react";
import "./burger.css";

import { useSelector } from "react-redux";

import { selectBurgerOpen } from "../../features/appSlice";
const Burger = () => {
  const isOpen = useSelector(selectBurgerOpen);

  console.log(isOpen);

  useEffect(() => {
    //menu just toggled use gsap
  }, [isOpen]);

  return (
    <>
      <div className="burgerMenu">
        <div
          className={isOpen ? "burger1 burger isOpen" : "burger1 burger"}
        ></div>
        <div
          className={isOpen ? "burger2 burger isOpen" : "burger2 burger"}
        ></div>
        <div
          className={isOpen ? "burger3 burger isOpen" : "burger3 burger"}
        ></div>
      </div>
    </>
  );
};

export default Burger;
