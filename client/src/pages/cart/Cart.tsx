import StripeCheckout, { Token } from "react-stripe-checkout";
import CartItemBox from "../../components/cart-item-box/CartItemBox";
import SecondNavbar from "../../components/navbar/SecondNavbar";
import { Wrapper } from "./Cart.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProductFromCart,
  deleteAllProductsFromCart,
} from "../../redux/Actions";
import { State } from "../../redux/Store";
import { Product } from "../../types/Product";
import AlertBox from "../../components/alert-boxes/AlertBox";
import { useState } from "react";
import {
  AlertTitles,
  AlertTypes,
} from "../../components/alert-boxes/AlertText";
import { Form, Input, Label } from "../../style/Forms";

const Cart = () => {
  const cartState = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");

  const [showAlert, setShowAlert] = useState({
    show: false,
    type: "",
    title: "",
  });

  const handleDeleteProductFromCart = (product: Product) => {
    setShowAlert({
      show: true,
      type: AlertTypes.SUCCESS,
      title: AlertTitles.REMOVE_PROD_SUCCESS,
    });
    dispatch(removeProductFromCart(product));
  };

  const handleDeleteAllProductsFromCart = () => {
    if (cartState.products.length > 0) {
      setShowAlert({
        show: true,
        type: AlertTypes.SUCCESS,
        title: AlertTitles.REMOVE_ALL_PRODS_FROM_CART_SUCCESS,
      });
      dispatch(deleteAllProductsFromCart());
    } else {
      setShowAlert({
        show: true,
        type: AlertTypes.ERROR,
        title: AlertTitles.REMOVE_ALL_PRODS_FROM_CART_ERROR,
      });
    }
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
      const { status } = response;
      console.log(": ", status);
    } catch (error) {
      alert("Det har skjedd en feil");
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
          <p>
            Du vil bli tilsendt en mail med en mappe som inneholder én mp3 fil,
            én wav fil og én .rar fil. Vi bruker
            <a href="https://wetransfer.com/"> Wetransfer.com</a> som sikker
            filoverføring.
          </p>

          <Form style={{ backgroundColor: "transparent" }}>
            <Label style={{ color: "white" }}>Epost</Label>
            <Input
              name="phonennumber"
              type="text"
              placeholder="ola-normann@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="cart-button-container" data-locale="nb">
              <StripeCheckout
                token={makePayment}
                stripeKey={process.env.REACT_APP_KEY as string}
                name="Betal med stripe"
                image="/assets/logos/logo.png"
                amount={cartState.total * 100}
                currency={"NOK"}
                email={email}
                allowRememberMe={true}
                description="Sikker betaling ved hjelp as stripe.com"
                data-locale="nb"
              >
                <button
                  className="button button-primary"
                  type="submit"
                  onClick={(e) => e.preventDefault()}
                >
                  Betal med kort
                </button>
              </StripeCheckout>

              {/* <button
                className="button button-vipps"
                onClick={(e) => e.preventDefault()}
              >
                VIPPS
              </button> */}
            </div>
          </Form>

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

      {showAlert.show && (
        <AlertBox
          type={showAlert.type}
          title={showAlert.title}
          onClick={() => setShowAlert({ show: false, type: "", title: "" })}
        />
      )}
    </Wrapper>
  );
};

export default Cart;
