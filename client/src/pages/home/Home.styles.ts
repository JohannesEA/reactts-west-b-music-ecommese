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

  .button-container {
    text-align: center;
    width: 100%;
    margin-top: 4em;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: var(--min-section-height);
  max-height: 65em;
  width: min(100%, 100em);
  margin: var(--margin-xl) auto 0 auto;

  @media (max-width: 600px) {
    min-height: var(--min-section-height);
    max-height: 80em;
    margin-bottom: var(--margin-large);
  }

  @media (max-width: 350px) {
    margin-bottom: 50px;
  }

  .btn-disabled {
    background-color: gray !important;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 90%;
  margin: var(--margin-large) auto;
  background-color: var(--color-text);
  color: var(--color-1);
  border-radius: 0.5em 0.5em 0 0;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContactInformastionContainer = styled.div`
  width: 90%;
  color: var(--color-1);
  margin-bottom: var(--margin-large);
`;

export const ContactInfoContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  text-align: flex-start;
`;

export const ProfileContainer = styled.div`
  cursor: pointer;
  bottom: 0;
  margin: var(--margin-large) auto 0 auto;
  width: 100%;
  background-color: var(--color-4);
  max-height: 400px;

  &:hover {
    border-radius: 0;
    background-color: var(--color-4-hover);
  }
`;
