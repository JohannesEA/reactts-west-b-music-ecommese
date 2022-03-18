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
`;
