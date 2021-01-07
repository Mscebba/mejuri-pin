import styled from 'styled-components';

export const TitleContainer = styled.h1`
  font-size: 1.7rem;
  font-style: italic;
  font-weight: 400;
  text-align: right;
  text-transform: capitalize;
  color: ${({ theme }) => theme.secondaryColor};
  margin-bottom: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.smallBreakpoint}) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
