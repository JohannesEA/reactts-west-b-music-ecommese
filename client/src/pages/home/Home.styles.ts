import styled from "styled-components";
import { IPAD_WIDTH } from "../../utils/ScreenWith";

interface IWrapper {
  backgroundColor?: string;
  color?: string;
  backgroundImg?: string;
}

export const Wrapper = styled.div<IWrapper>`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  min-height: var(--min-section-height-mobile);
`;

export const HeroWrapper = styled.div<IWrapper>`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(${(props) => props.backgroundImg});
  background-size: cover;
  min-height: var(--min-section-height-mobile);
`;

export const AboutWrapper = styled.div<IWrapper>`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  min-height: 20em;
  background: url(${(props) => props.backgroundImg});
  background-size: cover;
  min-height: var(--min-section-height-mobile);

  @media (min-width: ${IPAD_WIDTH}px) {
    grid-template-columns: 2fr 1fr;
    min-height: 30em;
    max-height: 35em;
  }

  .about-text-and-button-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .about-img-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-img {
    max-width: clamp(450px, 10vw, 800px);
  }

  .about-btn {
    margin-top: 1.5em;
  }
`;

export const WorkProcessWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: var(--min-section-height-mobile);

  @media (min-width: ${IPAD_WIDTH}px) {
    min-height: 30em;
    max-height: 35em;
  }

  .work-process-center-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-align: center;
  }

  .active {
    border-radius: 0.5em;
    background-color: var(--color-text-hover);
    height: 1em;
    width: 1em;
  }
`;

export const Circle = styled.h1`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  font-size: 1.5rem;
  height: 0.8em;
  width: 0.8em;
  color: var(--color-1);
  border-radius: 50%;
  background-color: var(--color-text);
  padding: 0.3em;
  &:hover {
    border-radius: 0.5em;
    background-color: var(--color-text-hover);
  }

  p {
    margin-bottom: 25px;
  }
`;

export const ProductOverviewWrapper = styled.div`
  width: 90%;
  margin: 0 auto 5em auto;
  min-height: var(--min-section-height-mobile);
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 5em;
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  height: 5em;
  background-color: var(--color-text);
  color: var(--color-1);
  border-radius: 0.5em 0.5em 0 0;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 3em;
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  text-align: center;
`;
