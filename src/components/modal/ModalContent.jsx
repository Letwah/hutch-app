import React, { forwardRef } from "react";

const ModalContent = forwardRef((props, ref) => {
  return (
    <div className="modal-content-container" ref={ref}>
      <img></img>
    </div>
  );
});

export default ModalContent;
