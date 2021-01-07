import styled, { css } from 'styled-components';
import { MaterialIcons } from 'styles/styles.styled';

const WithFavorites = css`
  justify-content: space-between;

  > div {
    width: calc(94% / 3);
  }
  &::after {
    content: '';
    width: calc(94% / 3);
  }
`;
const Empty = css`
  justify-content: center;

  > div {
    width: 100%;
    i {
      color: #cf3333;
    }
  }
  &::after {
    content: '';
    width: 100%;
  }
`;

const HandleContent = (props) => {
  return props.items.length < 1 ? Empty : WithFavorites;
};

export const FavoritesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  ${HandleContent}

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
export const FavoriteIcon = styled.i`
  ${MaterialIcons}
  color: #cf3333
`;
