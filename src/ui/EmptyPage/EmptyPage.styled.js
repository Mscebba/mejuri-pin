import styled from 'styled-components';
import { WithFade } from 'styles/mixins.styled';

export const EmptyPageContainer = styled(WithFade)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.greyMed};
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 2rem;
  a {
    color: ${({ theme }) => theme.accentColor};
  }
  @media screen and (max-width: ${({ theme }) => theme.smallBreakpoint}) {
    margin-top: 1rem;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 40vh;

  > * {
    max-width: 60%;
    opacity: 0.1;
  }

  @media screen and (max-width: ${({ theme }) => theme.smallBreakpoint}) {
    height: 30vh;
    width: 30vh;
    margin-bottom: 0;
  }
`;

export const EmptyTitle = styled.h1`
  color: #000;
  &__description {
    color: $greyMed;
  }

  @media screen and (max-width: ${({ theme }) => theme.smallBreakpoint}) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.greyMed};
`;
