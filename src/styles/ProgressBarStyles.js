import styled from "styled-components";

export const ProgressContainer = styled.div`
  background: #eee;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const ProgressFill = styled.div`
  height: 20px;
   background: #007bff;
  width: ${({ progress }) => progress}%;
  transition: width 0.3s ease-in-out;
`;