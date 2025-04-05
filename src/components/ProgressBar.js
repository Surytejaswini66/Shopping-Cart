import React from "react";
import { ProgressContainer, ProgressFill } from "../styles/ProgressBarStyles";
import { THRESHOLD } from "../constants";

const ProgressBar = ({ total }) => {
  const progress = (total / THRESHOLD) * 100;
  return (
    <ProgressContainer>
      <ProgressFill progress={progress}></ProgressFill>
    </ProgressContainer>
  );
};

export default ProgressBar;