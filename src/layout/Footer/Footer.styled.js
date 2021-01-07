import styled from 'styled-components';

export const FooterContainer = styled.footer`
  font-family: ${({ theme }) => theme.sansFamily};
  border: 1px solid ${({ theme }) => theme.greyLightest};
  color: ${({ theme }) => theme.greyMed};
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  padding: 4rem 5rem;

  h4 {
    font-weight: 300;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0.2rem 0;
      padding: 0;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.smallBreakpoint}) {
    padding: 1rem 2rem;
    flex-wrap: wrap;
    section:not(:last-child) {
      width: calc(100% / 2);
      margin-bottom: 1rem;
    }
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
