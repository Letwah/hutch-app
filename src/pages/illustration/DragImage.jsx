import React from "react";
import dragElement from "../../store/dragImage";
const DragImage = () => {
  const dragElement = useSelector(selectDragImage);
  // const dragElement = document.getElementById("dragImage");

  return (
    <div id="dragImage">
      {dragElement.map((item) => {
        console.log(item.images);
        return <div className="imageContainer">{image.id}</div>;
      })}
    </div>
  );
};

export default DragImage;

//put this in reducer
