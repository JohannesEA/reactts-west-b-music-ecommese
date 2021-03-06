import styled from "styled-components";

interface IButton {
  color?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
}

export const LargeButton = styled.button<IButton>`
  margin: 0 auto;
  max-width: 500px;
  padding: var(--padding-small);
  border-radius: var(--border-radius);
  width: 80%;
  background-color: rgba(6, 42, 75, 0.7);
  color: var(--color-text);
  font-family: "Playfair Display", serif;
  font-size: var(--font-size-large);
  border: none;
  outline: none;
  transition: all var(--transition-time) ease;

  &:hover {
    background-color: rgba(6, 42, 75, 1);
  }
`;

export const StandardButton = styled.button<IButton>`
  margin: 0 auto;
  max-width: 150px;
  padding: var(--padding-extra-small);
  border-radius: var(--border-radius);
  width: 80%;
  background-color: rgba(6, 42, 75, 0.7);
  color: var(--color-text);
  font-family: "Playfair Display", serif;
  font-size: var(--font-size-medium);
  border: none;
  outline: none;
  transition: all var(--transition-time) ease;

  &:hover {
    background-color: rgba(6, 42, 75, 1);
  }
`;

export const StyledOrangeButton = styled.button`
  margin: 0 auto;
  max-width: 150px;
  padding: var(--padding-extra-small);
  border-radius: var(--border-radius);
  width: 80%;
  background-color: rgba(255, 91, 36, 0.7);
  color: var(--color-text);
  font-family: "Playfair Display", serif;
  font-size: var(--font-size-medium);
  border: none;
  outline: none;
  transition: all var(--transition-time) ease;

  &:hover {
    background-color: rgba(255, 91, 36, 1);
  }
`;
