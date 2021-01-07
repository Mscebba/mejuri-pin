import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { DropDown, DropDownItem, MobileDrawer } from 'ui';

import {
  Brand,
  FavoritesCount,
  FavoritesText,
  HeaderContainer,
  Menu,
  NavContainer,
  NavLinkItemFavorite,
  NavLinks,
  NavLinksItem,
} from './Header.styled';

function Header({ favorites: { items } }) {
  const [show, setShow] = useState(false);

  return (
    <HeaderContainer>
      <Menu
        onClick={() => {
          setShow(!show);
          document.body.style.overflow = 'hidden';
        }}
      >
        <i className='material-icons'>menu</i>
      </Menu>
      <Brand>
        <Link to='/'>
          <h1>Mejuri Pin</h1>
        </Link>
      </Brand>
      <NavContainer role='navigation'>
        <NavLinks>
          <NavLinksItem>
            <>
              Hello,
              <DropDown dropdownLink='User!' dropdownTitle='Your account'>
                <DropDownItem onClick={() => ''}>Account</DropDownItem>
                <DropDownItem onClick={() => ''}>Your orders</DropDownItem>
                <DropDownItem onClick={() => ''}>Wish list</DropDownItem>
              </DropDown>
            </>
          </NavLinksItem>
          <NavLinksItem>
            <NavLinkItemFavorite to='/favorites'>
              <i className='material-icons'>favorite</i>
              <FavoritesText>Favorites</FavoritesText>
              {items.length > 0 && (
                <FavoritesCount>({items.length})</FavoritesCount>
              )}
            </NavLinkItemFavorite>
          </NavLinksItem>
        </NavLinks>
      </NavContainer>

      <MobileDrawer
        userName='User'
        show={show}
        onClick={() => {
          setShow(!show);
          document.body.removeAttribute('style');
        }}
      >
        <Link to='/'>Shop all</Link>
        <Link to='/category/bracelets'>Bracelets</Link>
        <Link to='/category/earrings'>Earrings</Link>
        <Link to='/category/pendants'>Pendants</Link>
        <Link to='/category/rings'>Rings</Link>
        <Link to='/favorites'>
          Favorites <i className='material-icons'>favorite</i>
        </Link>
      </MobileDrawer>
    </HeaderContainer>
  );
}

const mapStateToProps = ({ favorites }) => ({
  favorites,
});

export default connect(mapStateToProps)(Header);
