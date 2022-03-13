import { LargeButton } from "../../style/Buttons";
import { HeroWrapper } from "./Home.styles";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <HeroWrapper id="hero" backgroundImg="/assets/images/img2.jpg">
      <Link
        style={{ width: "100%", textAlign: "center" }}
        to="beats"
        spy={true}
        smooth={true}
        offset={-100}
        duration={300}
      >
        <LargeButton>BEATS</LargeButton>
      </Link>
    </HeroWrapper>
  );
};

export default Hero;
