import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    width: calc(94% / 3);
  }
  &::after {
    content: '';
    width: calc(94% / 3);
  }

  @media screen and (max-width: ${({ theme }) => theme.largeBreakpoint}) {
    > div {
      width: calc(98% / 2);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.xsmallBreakpoint}) {
    > div {
      width: 100%;
    }
  }
`;

export const ProductsCount = styled.div`
  text-align: right;
  margin-bottom: 0.5rem;
`;
