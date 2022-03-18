import { Container, Menu, Menulink, MenuLogoText } from "./Navbar.styles";
import { Spiral as Hamburger } from "hamburger-react";
import getWindowDimensions from "../../common-functions/Dimentions";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as DomLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";

const Navbar = () => {
  const { width } = getWindowDimensions();
  const [isOpen, setOpen] = useState(false);
  const quantity = useSelector((state: State) => state?.quantity);

  useEffect(() => {
    const test = () => {
      console.log(quantity);
    };

    test();
  }, []);

  return (
    <Container id="navbar">
      <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
        <MenuLogoText>WestBMusic</MenuLogoText>
      </Link>

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
              {quantity > 0 ? (
                <p style={{ color: "white" }}>{quantity}</p>
              ) : (
                <p style={{ color: "white" }}>0</p>
              )}
            </Menulink>
          </DomLink>
        </div>
      )}

      {(isOpen || width > 800) && (
        <Menu>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>
            <Menulink onClick={() => setOpen(!isOpen)}>Hjem</Menulink>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            {" "}
            <Menulink onClick={() => setOpen(!isOpen)}>Om</Menulink>
          </Link>
          <DomLink to="/products">
            <Menulink onClick={() => setOpen(!isOpen)}>Beats</Menulink>
          </DomLink>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            <Menulink onClick={() => setOpen(!isOpen)}>Kontakt</Menulink>
          </Link>

          <DomLink to="/cart">
            <Menulink className="cart-logo" onClick={() => setOpen(!isOpen)}>
              <AiOutlineShoppingCart size={25} />
              {quantity > 0 ? (
                <p style={{ color: "white" }}>{quantity}</p>
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

export default Navbar;
