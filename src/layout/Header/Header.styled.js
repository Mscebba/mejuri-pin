import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HeaderPadd } from 'styles/styles.styled';
import { WithFade } from 'styles/mixins.styled';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.header};
  position: sticky;
  top: 0;
  z-index: 900;
  ${HeaderPadd}
  @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
    height: 65px;
  }
`;

export const Brand = styled.div`
  font-family: ${({ theme }) => theme.sansFamily};
  color: #fff;
  min-width: 170px;
  text-decoration: none;
  @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
    font-size: 0.85rem;
    flex: 1;
  }
  @media screen and (max-width: ${({ theme }) => theme.smallBreakpoint}) {
    font-size: 0.75rem;
    min-width: unset;
    img {
      max-width: 200px;
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavLinksItem = styled.li`
  font-family: ${({ theme }) => theme.sansFamily};
  font-size: 0.9rem;
  color: #fff;
  margin-right: 1.2rem;
  position: relative;
`;
export const NavLinkItemFavorite = styled(Link)`
  display: flex;
  align-items: center;
  i {
    font-size: 0.9rem;
    margin-right: 0.3rem;
    @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
      font-size: 1.4rem;
    }
  }
`;

export const FavoritesText = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
    display: none;
  }
`;

export const FavoritesCount = styled(WithFade)`
  font-size: 0.6rem;
  position: absolute;
  top: -3px;
  left: calc(100% + 0.2rem);
  @media screen and (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
    left: calc(100% - 0.1rem);
  }
`;

export const Menu = styled.div`
  color: #fff;
  margin-right: 0.5rem;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.mediumBreakpoint}) {
    display: none;
  }
`;
