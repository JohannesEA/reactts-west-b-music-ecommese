import styled from "styled-components";

interface IWrapper {
  backgroundColor?: string;
  color?: string;
  backgroundImg?: string;
}

export const Wrapper = styled.div<IWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  min-height: var(--min-section-height);
`;

export const HeroWrapper = styled.div<IWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(${(props) => props.backgroundImg});
  background-size: cover;
  min-height: var(--min-section-height);
`;
