import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid var(--color-text);
  border-radius: var(--border-radius);
  background-color: var(--color-2);
  max-width: var(--max-box-width);
  width: 80%;
  margin: 0 auto;
  padding-bottom: 0.3em;
  margin: 10px auto;

  &:hover {
    background-color: var(--color-2-hover);
  }

  .cart-product-img {
    width: 100%;
    min-height: 5em;
    max-height: 10em;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
  }
`;
