import React, { forwardRef } from "react";

const ModalContent= forwardRef((ref) => {
    return (
        <div className="modal-content-container" ref={ref}>
            <img></img>
        </div>
    );
});

export const ModalContent;