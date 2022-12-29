import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  to {
    -webkit-transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  gap: 1rem;
`;

export const Loading = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #3f3f3f;
  border-top: 2px solid rgba(255, 255, 255, 0.87);
  -webkit-animation: {spin} 1s linear infinite;
  animation: ${spin} 1s infinite;
`;
