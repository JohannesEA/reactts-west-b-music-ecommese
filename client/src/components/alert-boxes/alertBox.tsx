import { Wrapper } from "./AlertBox.styles";
import { AlertTypes } from "./AlertText";

interface IAlertBox {
  type: string;
  title: string;
  onClick: () => void;
}

const AlertBox = ({ type, title, onClick }: IAlertBox) => {
  return (
    <Wrapper>
      {type === AlertTypes.SUCCESS && <p style={{ color: "green" }}>{title}</p>}
      {type === AlertTypes.ERROR && <p style={{ color: "red" }}>{title}</p>}

      <button onClick={onClick} className="button button-primary">
        Lukk
      </button>
    </Wrapper>
  );
};

export default AlertBox;
