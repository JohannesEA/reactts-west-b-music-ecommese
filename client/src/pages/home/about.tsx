import { Wrapper } from "./Home.styles";
import { HOME_CONTENT } from "../../development/data";
import { StandardButton } from "../../style/Buttons";

const About = () => {
  return (
    <Wrapper>
      <h1>{HOME_CONTENT.about_title}</h1>
      <p>{HOME_CONTENT.about_text}</p>
      <StandardButton>Kontakt oss</StandardButton>
    </Wrapper>
  );
};

export default About;
