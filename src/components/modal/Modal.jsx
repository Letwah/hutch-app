import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import ModalContent from "./ModalContent";

import "./modal.css";

const Modal = (props) => {
  console.log(props);
  const modalVeil = useRef(null);
  const modalDialogue = useRef(null);

  useEffect(() => {
    if (props.visible) {
      gsap.to(modalVeil.current, { autoAlpha: 1, duration: 0.5 });
      gsap.to(modalDialogue.current, {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.5,
      });
    }
  }, [props.visible]);

  const onCloseClick = () => {
    gsap.to(modalVeil.current, { opacity: 0, duration: 1 });
    gsap.to(modalDialogue.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
      onComplete: props.close,
    });
  };

  return (
    <div className={`modal-container${props.visible ? " show" : " show"}`}>
      <div onClick={onCloseClick} ref={modalVeil} className="modal-veil">
        <p>X</p>
      </div>

      <div ref={modalDialogue} className="modal-dialog">
        <ModalContent modalImage={props.modalImage} />
      </div>
    </div>
  );
};

export default Modal;
