import styled, { keyframes } from "styled-components";

export const colorChange = keyframes`
  0% {
      background-color: #1e1e35;
  }
  10% {
      background-color: #252541;
  }
  20% {
      background-color: #2d2d4e;
  }
  30% {
      background-color: #34345a;
  }
  40% {
      background-color: #3b3b67;
  }
  50% {
      background-color: #424273;
  }
  60% {
      background-color: #3b3b67;
  }
  70% {
      background-color: #34345a;
  }
  80% {
      background-color: #34345a;
  }
  90% {
      background-color: #2d2d4e;
  }
  100% {
      background-color: #252541;
  }
`;

export const rotate = keyframes`
  100% {
    transform: rotate(360deg);

  }

`;

export const rotate2 = keyframes`
 0% {
  background: linear-gradient(
    #f00202 0%,
    #bd0404 10%,
    #7d0404 50%,
    #4a0202 100%
  );
  }

  50% {
    background: url("./assets/logos/logo")
  }
  100% {
    background: linear-gradient(
    #f00202 0%,
    #bd0404 10%,
    #7d0404 50%,
    #4a0202 100%
  );
  }
`;

export const boxShadowAnimation = keyframes`
0% {
    box-shadow:  1px 2px 25px -5px rgba(255, 161, 161, 0.75);
  }

  10% {
    box-shadow: 1px 2px 25px -5px rgba(232, 186, 142, 0.75);
  }

  20% {
    box-shadow: 1px 2px 25px -5px rgba(209, 252, 139, 0.75);
  }

  30% {
    box-shadow: 1px 2px 25px -5px rgba(175, 243, 126, 0.75);
  }
  40% {
    box-shadow: 1px 2px 25px -5px rgba(124, 250, 156, 0.75);
  }

  50% {
    box-shadow: 1px 2px 25px -5px rgba(111, 245, 176, 0.75);
  }

  60% {
    box-shadow: 1px 2px 25px -5px rgba(121, 204, 248, 0.75);
  }
  70% {
    box-shadow: 1px 2px 25px -5px rgba(121, 176, 248, 0.75);
  }
  80% {
    box-shadow: 1px 2px 25px -5px rgba(117, 147, 243, 0.75);
  }
  90% {
    box-shadow: 1px 2px 25px -5px rgba(187, 123, 252, 0.75);
  }

100% {
    box-shadow:  1px 2px 25px -5px rgba(255, 161, 161, 0.75);
  }
`;

export const PlayMusicAnimation = styled.div`
  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 100%;
  width: 5em;
  height: 5em;
  margin: 0 auto;
  background: url("/assets/logos/logo.png") no-repeat;
  background-size: contain;
  animation: ${boxShadowAnimation} 2s linear infinite,
    ${rotate} 2s linear infinite;
`;

export const Circle = styled.div`
  animation: ${boxShadowAnimation} 2s linear infinite,
    ${rotate} 2s linear infinite;
  height: 5em;
  width: 5em;

  background-image: url("/assets/logos/logo1.png");
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ::before {
    content: "";
    height: 4em;
    width: 4em;
    border-radius: 50%;
    filter: blur(18px);
  }

  ::after {
    content: "";
    position: absolute;
    height: 5em;
    width: 5em;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.6);
    bottom: -60px;
    z-index: -1;
    filter: blur(10px);
  }
`;
