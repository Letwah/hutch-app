import { useState } from "react";
import ImgBox from "../components/intro/ImgBox";
import { GlobalStyle, Wrapper, ImageContainer } from "./introStyles";
// import "./introStylesCss";

// prettier-ignore
const matrix = [
  [0, 0], [1, 0], [2, 0], [3, 0],
  [0, 1], [1, 1], [2, 1], [3, 1],
  [0, 2], [1, 2], [2, 2], [3, 2],
  [0, 3], [1, 3], [2, 3], [3, 3],
  [0, 4], [1, 4], [2, 4], [3, 4],
  [0, 5], [1, 5], [2, 5], [3, 5]
]

const Intro = () => {
  const [distance, setDistance] = useState(1);

  const easing = (num) => Math.pow(num, 3);

  const calculateDistance = ([x, y]) => {
    console.log("calculateDistance");
    const center = [window.innerWidth / 2, window.innerHeight / 2];
    const maxHypot = Math.hypot(center[0], center[1]);
    const hypot = Math.hypot(center[0] - x, center[1] - y);
    const distance = hypot / maxHypot;
    const easedDistance = easing(distance);
    setDistance(easedDistance);
  };

  const handleMove = ({ clientX, clientY }) => {
    calculateDistance([clientX, clientY]);
  };

  const handleTouchMove = ({ touches }) => {
    calculateDistance([touches[0].clientX, touches[0].clientY]);
  };

  return (
    <>
      <GlobalStyle />
      {/* <Header />
      <Footer /> */}
      <Wrapper
        onMouseMove={handleMove}
        onTouchMove={handleTouchMove}
        $color={Math.round(220 - distance * 70)}
      >
        <ImageContainer $isTogether={distance < 0.001}>
          {matrix.map(([x, y], index) => (
            <ImgBox key={index} x={x} y={y} percent={distance} />
          ))}
        </ImageContainer>
      </Wrapper>
    </>
  );
};

export default Intro;
