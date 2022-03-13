import styled from "styled-components";
import { IPAD_WIDTH } from "../../utils/ScreenWith";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid var(--color-text);
  border-radius: var(--border-radius);
  background-color: var(--color-2);
  max-width: var(--max-box-width);
  margin: 10px;
  &:hover {
    background-color: var(--color-2-hover);
  }

  .productbox-img {
    width: 100%;
    min-height: 15em;
    max-height: 15em;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  .producbox-button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto 0.5em auto;

    @media (min-width: ${IPAD_WIDTH}px) {
      margin-bottom: 0.5em;
    }
  }
`;
