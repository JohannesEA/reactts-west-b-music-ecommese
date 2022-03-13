import { useState } from "react";

//Styles
import {
  ContactWrapper,
  ContactContainer,
  ContactInfoContainer,
} from "./Home.styles";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Form, Label, Input, TextArea, ErrorMessage } from "../../style/forms";

import { StandardButton } from "../../style/Buttons";
const Contact = () => {
  const [messageState, setMessageState] = useState({
    isError: false,
    message: "",
  });

  return (
    <ContactWrapper id="contact">
      <h1>Kontakt Oss</h1>
      <br></br>

      <Form>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <ContactContainer>
          <ContactInfoContainer>
            <BsFillPhoneFill fontSize={30} color="black" />
            <p>+47 99509035</p>
          </ContactInfoContainer>

          <ContactInfoContainer>
            <MdEmail fontSize={30} color="black" />
            <p>westbmusic@gmail.com</p>
          </ContactInfoContainer>
        </ContactContainer>
        <Label>Navn</Label>
        <Input placeholder="Ola normann" />
        <Label>Epost</Label>
        <Input placeholder="olanormann@gmail.com" />
        <Label>Mobilnummer</Label>
        <Input placeholder="+47 99509035" />
        <Label>Tittel</Label>
        <Input placeholder="Bestilling av beat" />
        <Label>Melding</Label>
        <TextArea placeholder="Hei! Jeg ønsker å bestille en beat.." />
        <StandardButton
          onClick={() =>
            setMessageState({ isError: true, message: "Feil i en av feltene" })
          }
        >
          Send
        </StandardButton>

        {messageState.isError && (
          <ErrorMessage>{messageState.message}</ErrorMessage>
        )}
      </Form>
    </ContactWrapper>
  );
};

export default Contact;
