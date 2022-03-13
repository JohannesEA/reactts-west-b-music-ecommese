import StripeCheckout, { Token } from "react-stripe-checkout";
import CartItemBox from "../../components/cart-item-box/CartItemBox";
import SecondNavbar from "../../components/navbar/SecondNavbar";
import { CART_PRODUCTS } from "../../development/data";
import { Wrapper } from "./Cart.styles";

const Cart = () => {
  const total = 5000;
  const product = {
    name: "React from FB",
    price: 10,
    productBy: "Facebook",
  };

  //Stripe needs http(s)
  const server_url = "http://localhost:8282/";

  const makePayment = async (token: Token): Promise<void> => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await fetch(server_url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
      console.log("RESPONSE: ", response);
      const { status } = response;
      console.log("STATUS: ", status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <SecondNavbar />
      <h1>Handlekurv</h1>
      <div className="cart-product-container">
        {CART_PRODUCTS.map((prod) => (
          <CartItemBox product={prod} />
        ))}
      </div>

      <h3>Total pris: {total} kr</h3>
      <div className="cart-button-container">
        <StripeCheckout
          token={makePayment}
          stripeKey={process.env.REACT_APP_KEY as string}
          name="Buy React"
          amount={product.price * 100}
        >
          <button className="button button-stripe" type="submit">
            STRIPE
          </button>
        </StripeCheckout>

        <button className="button button-vipps">VIPPS</button>
      </div>
    </Wrapper>
  );
};

export default Cart;
