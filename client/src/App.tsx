import { useState } from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";

function App() {
  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10,
    productBy: "Facebook",
  });

  //Stripe needs http(s)
  const server_url = "http://localhost:8282/";

  const makePayment = (token: Token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(server_url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE: ", response);
        const { status } = response;
        console.log("STATUS: ", status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <StripeCheckout
        token={makePayment}
        stripeKey={process.env.REACT_APP_KEY as string}
        name="Buy React"
        amount={product.price * 100}
      >
        <button type="submit">Checkout</button>
      </StripeCheckout>
    </div>
  );
}

export default App;
