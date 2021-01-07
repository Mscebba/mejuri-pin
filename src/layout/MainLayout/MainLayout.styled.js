import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
    flex-flow: column;
  }
`;

export const Navigation = styled.div`
  width: 12%;
  min-width: 150px;
  padding-top: 6rem;
  @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
    background-color: #fff;
    position: fixed;
    padding-top: 0;
    width: 100%;
    min-width: unset;
    top: 60px;
    left: 0;
    z-index: 300;
  }
`;

export const Content = styled.div`
  flex: 1;
  @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
    padding-top: 1rem;
  }
`;
