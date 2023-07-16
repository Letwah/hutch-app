import React from "react";

const ModalContent = (props) => {
  return (
    <div className="modal-content-container">
      <img src={props.modalImage} />
    </div>
  );
};

export default ModalContent;
