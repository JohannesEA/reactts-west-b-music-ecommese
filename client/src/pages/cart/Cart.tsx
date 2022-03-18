import StripeCheckout, { Token } from "react-stripe-checkout";
import CartItemBox from "../../components/cart-item-box/CartItemBox";
import SecondNavbar from "../../components/navbar/SecondNavbar";
import { Wrapper } from "./Cart.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProductFromCart,
  deleteAllProductsFromCart,
} from "../../redux/actions";
import { State } from "../../redux/store";
import { Product } from "../../types/Product";

const Cart = () => {
  const cartState = useSelector((state: State) => state);
  const dispatch = useDispatch();

  const handleDeleteProductFromCart = (product: Product) => {
    dispatch(removeProductFromCart(product));
  };

  const handleDeleteAllProductsFromCart = () => {
    dispatch(deleteAllProductsFromCart());
  };

  //Stripe needs http(s)
  const server_url = "http://localhost:8282/";

  const makePayment = async (token: Token): Promise<void> => {
    const body = {
      token,
      cartState,
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
      {cartState?.quantity > 0 ? (
        <>
          <div className="cart-product-container">
            {cartState.products.map((prod) => (
              <CartItemBox
                key={`${prod._id}-${Date.now()}`}
                product={prod}
                onDelete={() => handleDeleteProductFromCart(prod)}
              />
            ))}
          </div>
          <h3>Total pris: {cartState?.total} kr</h3>
          <div className="cart-button-container">
            <StripeCheckout
              token={makePayment}
              stripeKey={process.env.REACT_APP_KEY as string}
              name="Buy React"
              amount={cartState.total * 100}
            >
              <button className="button button-stripe" type="submit">
                STRIPE
              </button>
            </StripeCheckout>

            <button className="button button-vipps">VIPPS</button>
          </div>
          <button
            className="button button-danger"
            onClick={() => handleDeleteAllProductsFromCart()}
          >
            Nullstill handlekurv
          </button>
        </>
      ) : (
        <>
          <h1>Handlekurv er tom</h1>
        </>
      )}
    </Wrapper>
  );
};

export default Cart;
