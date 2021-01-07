import styled from 'styled-components';
import { SidePadd } from 'styles/styles.styled';

export const Main = styled.main`
  min-height: calc(100vh - ${({ theme }) => theme.header});
  position: relative;
  ${SidePadd}
`;
