import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import {
  selectFavoritesItems,
  selectFavoritesSelector,
} from 'redux/products/favorites-selector';

import MainLayout from 'layout/MainLayout/MainLayout';
import Products from '_components/Products/Products';
import CategoryNav from '_components/Category/CategoryNav/CategoryNav';

import { EmptyPage, Spinner, Title } from 'ui';

import iconImg from 'assets/empty-favorites.png';

import { ProductsCount } from '_components/Category/Category.styled';
import { FavoritesContainer, FavoriteIcon } from './Favorites.styled';

function Favorites({ items, favorites: { isLoading, error } }) {
  let renderProducts = isLoading ? (
    <Spinner />
  ) : error ? (
    <h2>Error {error}</h2>
  ) : (
    <>
      <Title>Favorites</Title>
      <ProductsCount>{items.length} products</ProductsCount>
      <FavoritesContainer items={items}>
        {items.length > 0 ? (
          <Products allProducts={items} />
        ) : (
          <EmptyPage
            icon={<img src={iconImg} alt='empty page' />}
            title='Collect love!'
          >
            <span>
              Use <FavoriteIcon>favorite</FavoriteIcon> button to save your
              favorites!
            </span>
          </EmptyPage>
        )}
      </FavoritesContainer>
    </>
  );

  let renderNav = <CategoryNav />;

  return <MainLayout empty leftNav={renderNav} mainContent={renderProducts} />;
}

const mapStateToProps = createStructuredSelector({
  favorites: selectFavoritesSelector,
  items: selectFavoritesItems,
});
export default connect(mapStateToProps)(Favorites);
