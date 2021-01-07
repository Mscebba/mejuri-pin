import styled, { keyframes } from 'styled-components';

const Scaleout = keyframes`
  from {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
`;

export const SpinnerContainer = styled.div`
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: rgb(170, 85, 85);

  border-radius: 100%;
  -webkit-animation: ${Scaleout} 1s infinite ease-in-out;
  animation: ${Scaleout} 1s infinite ease-in-out;
`;
