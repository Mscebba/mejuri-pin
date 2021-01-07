import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchData } from 'redux/products/products-actions';
import { createStructuredSelector } from 'reselect';
import {
  selectProductsSelector,
  selectProductsItemsAll,
} from 'redux/products/products-selector';

import MainLayout from 'layout/MainLayout/MainLayout';
import Products from '_components/Products/Products';
import CategoryNav from '_components/Category/CategoryNav/CategoryNav';
import { Spinner, Title } from 'ui';

import { CategoryContainer, ProductsCount } from './Category.styled';

function Category({
  products: { isLoading, error },
  fetchData,
  allProducts,
  match,
}) {
  const id = match.params.id;

  const urlToFetch = !id
    ? process.env.REACT_APP_API_URL
    : `${process.env.REACT_APP_BASE_URL_CATEGORY}${id}.json`;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData(urlToFetch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlToFetch, fetchData]);

  let renderProducts = isLoading ? (
    <Spinner />
  ) : error ? (
    <h2>Error {error}</h2>
  ) : (
    <>
      <Title>{!id ? 'All Products' : id}</Title>
      <ProductsCount>{allProducts.length} products</ProductsCount>
      <CategoryContainer>
        <Products allProducts={allProducts} />
      </CategoryContainer>
    </>
  );

  let renderNav = isLoading ? <Spinner /> : <CategoryNav />;

  return <MainLayout leftNav={renderNav} mainContent={renderProducts} />;
}

const mapStateToProps = createStructuredSelector({
  products: selectProductsSelector,
  allProducts: selectProductsItemsAll,
});
export default withRouter(connect(mapStateToProps, { fetchData })(Category));
