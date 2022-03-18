import {
  Container,
  Menu,
  Menulink,
  MenuLogoText,
  MenulinkCart,
} from "./Navbar.styles";
import { Spiral as Hamburger } from "hamburger-react";
import getWindowDimensions from "../../common-functions/Dimentions";
import { useState } from "react";
import { Link as DomLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";

const SecondNavbar = () => {
  const { width } = getWindowDimensions();
  const [isOpen, setOpen] = useState(false);
  const cartState = useSelector((state: State) => state);
  return (
    <Container id="navbar">
      <DomLink to="/">
        <MenuLogoText onClick={() => setOpen(!isOpen)}>WestBMusic</MenuLogoText>
      </DomLink>

      {width < 800 && (
        <div className="hamburger-and-cart-container">
          <Hamburger
            label="Show menu"
            size={40}
            toggled={isOpen}
            toggle={setOpen}
            color="#fff"
          ></Hamburger>
          <DomLink to="/cart">
            <Menulink className="cart-logo" onClick={() => setOpen(!isOpen)}>
              <AiOutlineShoppingCart size={25} />
              {cartState?.quantity > 0 ? (
                <p style={{ color: "white" }}>{cartState?.quantity}</p>
              ) : (
                <p style={{ color: "white" }}>0</p>
              )}
            </Menulink>
          </DomLink>
        </div>
      )}

      {(isOpen || width > 800) && (
        <Menu>
          <DomLink to="/">
            <Menulink onClick={() => setOpen(!isOpen)}>Hjem</Menulink>
          </DomLink>
          <DomLink to="/">
            <Menulink onClick={() => setOpen(!isOpen)}>Om</Menulink>
          </DomLink>
          <DomLink to="/products">
            <Menulink onClick={() => setOpen(!isOpen)}>Beats</Menulink>
          </DomLink>
          <DomLink to="/">
            <Menulink onClick={() => setOpen(!isOpen)}>Kontakt</Menulink>
          </DomLink>
          <DomLink to="/cart">
            <Menulink className="cart-logo" onClick={() => setOpen(!isOpen)}>
              <AiOutlineShoppingCart size={25} />
              {cartState?.quantity > 0 ? (
                <p style={{ color: "white" }}>{cartState?.quantity}</p>
              ) : (
                <p style={{ color: "white" }}>0</p>
              )}
            </Menulink>
          </DomLink>
        </Menu>
      )}
    </Container>
  );
};

export default SecondNavbar;
