import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .confirm-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-top: 5em;
    color: var(--color-text) !important;
    min-height: 40em;
  }
`;
