import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 3em auto;

  .cart-product-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .cart-button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 400px) {
    .cart-product-container {
      grid-template-columns: repeat(1, 1fr);
    }

    .cart-button-container {
      flex-direction: column;
    }
  }

  .button {
    min-width: 8em;
    padding: 0.5em;
    outline: none;
    border: none;
    color: var(--color-text);
    border-radius: var(--border-radius);
    font-size: var(--font-size-medium);
    transition: all var(--transition-time) ease;
    margin: 10px;
  }

  .button-stripe {
    background-color: rgba(6, 42, 75, 0.7);
  }

  .button-stripe:hover {
    background-color: rgba(6, 42, 75, 1);
  }

  .button-vipps {
    background-color: rgba(255, 91, 36, 0.7);
  }

  .button-vipps:hover {
    background-color: rgba(255, 91, 36, 1);
  }
`;
