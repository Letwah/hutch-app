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
      gsap.to(modalVeil.current, { autoAlpha: 1, duration: 1 });
      gsap.to(modalDialogue.current, { autoAlpha: 1, duration: 1.4, delay: 1 });
    }
  }, [props.visible]);

  const onCloseClick = () => {
    gsap.to(modalVeil.current, { opacity: 0, duration: 1 });
    gsap.to(modalDialogue.current, {
      opacity: 0,
      duration: 1.4,
      delay: 1,
      onComplete: props.close,
    });
  };

  return (
    <div className={`modal-container${props.visible ? " show" : " show"}`}>
      <p>hello world</p>
      <div onClick={onCloseClick} ref={modalVeil} className="modal-veil">
        X
      </div>

      <div ref={modalDialogue} className="modal-dialog">
        <ModalContent modalImage={props.modalImage} />
      </div>
    </div>
  );
};

export default Modal;
