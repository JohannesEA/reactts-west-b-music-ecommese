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
  const [processText, setProcessText] = useState("Trykk på sirklene");
  const handleFirstStepContent = () => {
    setProcessText(p1);
  };

  const handleSecondStepContent = () => {
    setProcessText(p2);
  };

  const handleThirdStepContent = () => {
    setProcessText(p3);
  };

  const handleFourthStepContent = () => {
    setProcessText(p4);
  };
  return (
    <WorkProcessWrapper>
      <h1>{title}</h1>
      <div className="work-process-center-container">
        {width > 1000 ? (
          <>
            <Circle onClick={handleFirstStepContent}>
              <p>1</p>
            </Circle>{" "}
            ____________________{" "}
            <Circle onClick={handleSecondStepContent}>
              <p>2</p>
            </Circle>{" "}
            ____________________{" "}
            <Circle onClick={handleThirdStepContent}>
              <p>3</p>
            </Circle>{" "}
            ____________________{" "}
            <Circle onClick={handleFourthStepContent}>
              <p>4</p>
            </Circle>
          </>
        ) : (
          <>
            <Circle onClick={handleFirstStepContent}>
              <p>1</p>
            </Circle>
            _____
            <Circle onClick={handleSecondStepContent}>
              <p>2</p>
            </Circle>
            _____
            <Circle onClick={handleThirdStepContent}>
              <p>3</p>
            </Circle>
            _____
            <Circle onClick={handleFourthStepContent}>
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
