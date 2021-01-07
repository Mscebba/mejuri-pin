import styled from 'styled-components';
import { WithFade } from 'styles/mixins.styled';

export const BackDropContainer = styled(WithFade)`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
`;
