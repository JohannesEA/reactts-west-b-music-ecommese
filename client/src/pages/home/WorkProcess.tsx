import { Circle, WorkProcessWrapper, Wrapper } from "./Home.styles";
import getWindowDimensions from "../../common-functions/Dimentions";
import { useState } from "react";

type IWorkProcess = {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
};

const WorkProcess = ({ title, p1, p2, p3, p4 }: IWorkProcess) => {
  const { width } = getWindowDimensions();
  const [processText, setProcessText] = useState(p1);
  const [circleState, setCircleState] = useState({
    firstStep: true,
    secondStep: false,
    thirdStep: false,
    fourthStep: false,
  });

  const handleFirstStepContent = () => {
    setProcessText(p1);
    setCircleState({
      firstStep: true,
      secondStep: false,
      thirdStep: false,
      fourthStep: false,
    });
  };

  const handleSecondStepContent = () => {
    setProcessText(p2);
    setCircleState({
      firstStep: false,
      secondStep: true,
      thirdStep: false,
      fourthStep: false,
    });
  };

  const handleThirdStepContent = () => {
    setProcessText(p3);
    setCircleState({
      firstStep: false,
      secondStep: false,
      thirdStep: true,
      fourthStep: false,
    });
  };

  const handleFourthStepContent = () => {
    setProcessText(p4);
    setCircleState({
      firstStep: false,
      secondStep: false,
      thirdStep: false,
      fourthStep: true,
    });
  };
  return (
    <WorkProcessWrapper>
      <h1>{title}</h1>
      <div className="work-process-center-container">
        {width > 1000 ? (
          <>
            <Circle
              className={circleState.firstStep ? "active" : ""}
              onClick={handleFirstStepContent}
            >
              <p>1</p>
            </Circle>{" "}
            ____________________{" "}
            <Circle
              className={circleState.secondStep ? "active" : ""}
              onClick={handleSecondStepContent}
            >
              <p>2</p>
            </Circle>{" "}
            ____________________{" "}
            <Circle
              className={circleState.thirdStep ? "active" : ""}
              onClick={handleThirdStepContent}
            >
              <p>3</p>
            </Circle>{" "}
            ____________________{" "}
            <Circle
              className={circleState.fourthStep ? "active" : ""}
              onClick={handleFourthStepContent}
            >
              <p>4</p>
            </Circle>
          </>
        ) : (
          <>
            <Circle
              className={circleState.firstStep ? "active" : ""}
              onClick={handleFirstStepContent}
            >
              <p>1</p>
            </Circle>
            _____
            <Circle
              className={circleState.secondStep ? "active" : ""}
              onClick={handleSecondStepContent}
            >
              <p>2</p>
            </Circle>
            _____
            <Circle
              className={circleState.thirdStep ? "active" : ""}
              onClick={handleThirdStepContent}
            >
              <p>3</p>
            </Circle>
            _____
            <Circle
              className={circleState.fourthStep ? "active" : ""}
              onClick={handleFourthStepContent}
            >
              <p>4</p>
            </Circle>
          </>
        )}
      </div>
      <br></br>
      <p>{processText}</p>
    </WorkProcessWrapper>
  );
};

export default WorkProcess;
