import React from "react";
import dragElement from "../../store/dragImage";
const DragImage = () => {
  const dragElement = document.getElementById("dragImage");

  return (
    <>
      <DragImage />
      <div id="dragImage">DRAG</div>
    </>
  );
};

export default DragImage;

//put this in reducer
