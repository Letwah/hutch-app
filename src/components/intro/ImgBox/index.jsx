import React, { useState, useEffect } from "react";
import { Image } from "./styles";

const ImgBox = ({ x, y, percent }) => {
  const [position, setPosition] = useState([0, 0]);
  const [randomised, setRandomised] = useState(0);

  useEffect(() => {
    setPosition([x, y]); // set the starting position when comp mounts to be natural position
  }, [x, y]);

  useEffect(() => {
    // randomise the peices the second time the props are updated
    if (randomised === 1) {
      setPosition([
        Math.random() * 400 - x * 100 - 50,
        Math.random() * 600 - y * 100 - 50,
      ]);
    }
    // once pieces have been randomised increment by 1 to prevent them ever being randomised again
    setRandomised(randomised + 1);
  }, [percent]);

  return (
    <Image
      $initialX={x}
      $initialY={y}
      $movedX={position[0] * percent}
      $movedY={position[1] * percent}
    />
  );
};

export default ImgBox;
