import StripeCheckout, { Token } from "react-stripe-checkout";

const Cart = () => {
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
    <div>
      <StripeCheckout
        token={makePayment}
        stripeKey={process.env.REACT_APP_KEY as string}
        name="Buy React"
        amount={product.price * 100}
      >
        <button type="submit">Sjekk ut med STRIPE</button>
      </StripeCheckout>
    </div>
  );
};

export default Cart;
