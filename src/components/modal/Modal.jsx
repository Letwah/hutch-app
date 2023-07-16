import { useEffect } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
// import { useRef } from "react";
import {
  selectModalVeil,
  selectModalDialogue,
  setModalImage,
  setModalDialogue,
  setModalVeil,
} from "../../features/appSlice";
import ModalContent from "./ModalContent";

import "./modal.css";

const Modal = (props) => {
  // const modal

  const modalVeil = useSelector(selectModalVeil);
  const modalDialogue = useSelector(selectModalDialogue);
  // const visible = useSelector(selectVisible);

  useEffect(() => {
    if (visible) {
      gsap.to(modalVeil.current, { autoAlpha: 1, duration: 0.5 });
      gsap.to(modalDialogue.current, {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0.5,
      });
    }
  }, [visible]);

  const onCloseClick = () => {
    gsap.to(modalVeil.current, { opacity: 0, duration: 1 });
    gsap.to(modalDialogue.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
      onComplete: "close",
    });
  };

  return (
    <div className={`modal-container${visible ? " show" : " show"}`}>
      <div onClick={onCloseClick} ref={setModalVeil} className="modal-veil">
        <p>X</p>
      </div>

      <div ref={setModalDialogue} className="modal-dialog">
        <ModalContent modalImage={setModalImage} />
      </div>
    </div>
  );
};

export default Modal;
