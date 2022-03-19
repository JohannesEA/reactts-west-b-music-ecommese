import { Container, Menu, Menulink, MenuLogoText } from "./Navbar.styles";
import { Spiral as Hamburger } from "hamburger-react";
import getWindowDimensions from "../../common-functions/Dimentions";
import { useState } from "react";
import { Link } from "react-scroll";
import { Link as DomLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import Badge from "@material-ui/core/Badge";

interface INavbar {
  quantity: number;
}

const Navbar = ({ quantity }: INavbar) => {
  const { width } = getWindowDimensions();
  const [isOpen, setOpen] = useState(false);

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
              <Badge badgeContent={quantity} color="error">
                <AiOutlineShoppingCart size={25} />
              </Badge>
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
              <Badge badgeContent={quantity} color="error">
                <AiOutlineShoppingCart size={25} />
              </Badge>
            </Menulink>
          </DomLink>
        </Menu>
      )}
    </Container>
  );
};

export default Navbar;
