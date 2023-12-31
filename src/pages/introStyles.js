import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @keyframes glow {
    0% {
      box-shadow: rgb(0, 255, 123) 0 0 0px;
    }
    100% {
      box-shadow: rgb(0, 255, 123) 0 10px 100px;
    }
  }

  body {
    color: #FBFBFB;
    
    height: 100vh;
    margin: 0;
    overflow: hidden;
    padding: 0;
    text-rendering: optimizeLegibility;
   
    -webkit-font-smoothing: antialiased;
  }

 
`;

export const Wrapper = styled.section.attrs(({ $color }) => ({
  style: {
    backgroundColor: `hsl(${$color}, 90%, 50%)`,
  },
}))`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow-y: hidden;
`;

export const ImageContainer = styled.div.attrs(({ $isTogether }) => ({
  style: {
    animation: $isTogether ? "glow 3s infinite alternate" : "none",
  },
}))`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 600px;
  width: 400px;

  @media (max-width: 400px) {
    display: none;
  }
`;
