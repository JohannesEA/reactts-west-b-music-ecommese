//functions/hooks
import { Link as DomLink } from "react-router-dom";
import { ScrollToTop } from "../../common-functions/Functions";
//styles
import { Wrapper } from "./Error.styles";
import { StandardButton } from "../../style/Buttons";

//components
import SecondNavbar from "../../components/navbar/SecondNavbar";

const Error = () => {
  ScrollToTop();
  return (
    <Wrapper>
      <SecondNavbar />
      <div className="confirm-container">
        <h1>Obs</h1>
        <h4>Det har skjedd en feil</h4>

        <DomLink to="/">
          <StandardButton style={{ maxWidth: "500px" }}>
            Tilbake Til Trygghet!
          </StandardButton>
        </DomLink>
      </div>
    </Wrapper>
  );
};

export default Error;
