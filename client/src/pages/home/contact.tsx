import { useState, MouseEvent, ChangeEvent, useEffect } from "react";
import { send } from "emailjs-com";

//Styles
import { Wrapper, ContactContainer, ContactInfoContainer } from "./Home.styles";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  Form,
  Label,
  Input,
  TextArea,
  ErrorMessage,
  ConfirmMessage,
} from "../../style/forms";

const Contact = () => {
  const [messageState, setMessageState] = useState({
    isError: false,
    isSuccess: false,
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  //Request message state => the userrequest that will get validated and sent to our mailbox
  const [requestMessage, setRequestMessage] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    title: "",
    message: "",
  });

  const validation = (
    name: string,
    email: string,
    phonenumber: string,
    title: string,
    message: string
  ) => {
    if (
      name !== "" &&
      email !== "" &&
      phonenumber !== "" &&
      title !== "" &&
      message !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSendRequest = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessageState({
      isError: false,
      isSuccess: false,
      message: "",
    });
    if (
      validation(
        requestMessage.name,
        requestMessage.email,
        requestMessage.phoneNumber,
        requestMessage.title,
        requestMessage.message
      )
    ) {
      send(
        "service_d92dhff",
        "template_qlfe9vt",
        requestMessage,
        "user_nXc7ccykjAkWk2linJAyS"
      ).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setMessageState({
            isError: false,
            isSuccess: true,
            message:
              "Takk for at du ønsker å komme i kontakt med oss. Vi svarer så fort vi kan😁",
          });
          setIsLoading(false);
        },
        function (error) {
          console.log("FAILED...", error);
          setMessageState({
            isError: true,
            isSuccess: false,
            message: "Noe gikk galt under sendingen.. Prøv igjen.",
          });
          setIsLoading(false);
        }
      );
    } else {
      setMessageState({
        isError: true,
        isSuccess: false,
        message:
          "Alle inputfelt må være fylt ut med korrekt informasjon. Prøv igjen.",
      });
      setIsLoading(false);
    }
  };

  const handleChangeForInput = (e: ChangeEvent<HTMLInputElement>) => {
    setRequestMessage({ ...requestMessage, [e.target.name]: e.target.value });
  };

  const handleChangeForTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setRequestMessage({ ...requestMessage, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const handleResetForm = () => {
      if (messageState.isSuccess) {
        setRequestMessage({
          name: "",
          email: "",
          phoneNumber: "",
          title: "",
          message: "",
        });

        setMessageState({
          isError: messageState.isError,
          isSuccess: false,
          message: messageState.message,
        });
      }
    };
    setInterval(handleResetForm, 5000);
  }, [messageState]);

  return (
    <Wrapper id="contact">
      <h1>KONTAKT OSS</h1>

      <Form>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />

        <ContactContainer>
          <ContactInfoContainer>
            <BsFillPhoneFill fontSize={30} color="var(--color-text-dark)" />
            <p style={{ color: "var(--color-text-dark)" }}>+47 99509035</p>
          </ContactInfoContainer>

          <ContactInfoContainer>
            <MdEmail fontSize={30} color="var(--color-text-dark)" />
            <p>westbmusic@gmail.com</p>
          </ContactInfoContainer>
        </ContactContainer>
        <Label>Navn</Label>
        <Input
          onChange={handleChangeForInput}
          type="text"
          name="name"
          value={requestMessage.name}
          placeholder="Ola normann"
        />
        <Label>Epost</Label>
        <Input
          onChange={handleChangeForInput}
          type="text"
          name="email"
          value={requestMessage.email}
          placeholder="olanormann@gmail.com"
        />
        <Label>Mobilnummer</Label>
        <Input
          onChange={handleChangeForInput}
          type="text"
          name="phoneNumber"
          value={requestMessage.phoneNumber}
          placeholder="+47 99509035"
        />
        <Label>Tittel</Label>
        <Input
          onChange={handleChangeForInput}
          type="text"
          name="title"
          value={requestMessage.title}
          placeholder="Bestilling av nettside"
        />
        <Label>Melding</Label>
        <TextArea
          onChange={handleChangeForTextArea}
          name="message"
          value={requestMessage.message}
          placeholder="Hei! Jeg ønsker å bestille en nettside.."
        />
        <button
          className="button button-primary"
          style={{ maxWidth: "100px", margin: "1em auto" }}
          onClick={handleSendRequest}
        >
          Send
        </button>

        {messageState.isError && (
          <ErrorMessage>{messageState.message}</ErrorMessage>
        )}

        {isLoading && <p>Sender melding..</p>}

        {messageState.isSuccess && (
          <ConfirmMessage>{messageState.message}</ConfirmMessage>
        )}
      </Form>
      <br></br>
      <br></br>
    </Wrapper>
  );
};

export default Contact;
