import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const WithFade = styled.div`
  animation: ${fadeIn} ease 0.4s;
  -webkit-animation: ${fadeIn} ease 0.4s;
  -moz-animation: ${fadeIn} ease 0.4s;
  -o-animation: ${fadeIn} ease 0.4s;
  -ms-animation: ${fadeIn} ease 0.4s;
`;
