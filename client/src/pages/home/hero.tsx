import { LargeButton } from "../../style/Buttons";
import { HeroWrapper } from "./Home.styles";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
  deleteAllProductsFromCart,
} from "../../redux/actions";
import { State } from "../../redux/store";
import { BEATS } from "../../development/data";

const Hero = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProductToCart(BEATS[0]));
  };

  return (
    <HeroWrapper id="hero" backgroundImg="/assets/images/img2.jpg">
      {/* <Link
        style={{ width: "100%", textAlign: "center" }}
        to="beats"
        spy={true}
        smooth={true}
        offset={-100}
        duration={300}
      > */}
      <LargeButton onClick={handleClick}>BEATS</LargeButton>
      {/* </Link> */}
    </HeroWrapper>
  );
};

export default Hero;
