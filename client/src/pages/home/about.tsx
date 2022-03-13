import { AboutWrapper } from "./Home.styles";
import { HOME_CONTENT } from "../../development/data";
import { StandardButton } from "../../style/Buttons";
import useWindowDimensions from "../../common-functions/Dimentions";
import { IPAD_WIDTH } from "../../utils/ScreenWith";

const About = () => {
  const { width } = useWindowDimensions();
  return (
    <AboutWrapper id="about">
      <div className="about-text-and-button-container">
        <h1>{HOME_CONTENT.about_title}</h1>
        <p>{HOME_CONTENT.about_text}</p>
        <StandardButton className="about-btn">Kontakt oss</StandardButton>
      </div>
      {width > IPAD_WIDTH && (
        <div className="about-img-container">
          <img
            className="img about-img"
            src="/assets/images/img1-rb.png"
            alt="about-img"
          />
        </div>
      )}
    </AboutWrapper>
  );
};

export default About;
