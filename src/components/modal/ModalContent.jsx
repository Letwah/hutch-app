import React from "react";
import { useSelector } from "react-redux";
import { selectModalImage } from "../../features/appSlice";

const ModalContent = () => {
  const modalImage = useSelector(selectModalImage);
  // const modal = useSelector(selectModal);
  return (
    <div className="modal-content-container">
      <img src={modalImage} />
    </div>
  );
};

export default ModalContent;
