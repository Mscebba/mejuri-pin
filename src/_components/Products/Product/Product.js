import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { connect } from 'react-redux';
import { toggleToFavorites } from 'redux/favorites/favorites-actions';

import {
  FavoriteIcon,
  ImageContainer,
  ImageContainerHover,
  ProductContainer,
  ProductDescription,
  ProductDescriptionName,
  ProductDescriptionPrice,
} from './Product.styled';

function Product({ item, toggleToFavorites }) {
  return (
    <ProductContainer>
      <ImageContainer>
        <LazyLoadImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}${item.variant_images[0].attachment_url_medium}`}
          effect='blur'
        />
        <ImageContainerHover>
          <LazyLoadImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}${item.variant_images[1].attachment_url_medium}`}
          />
        </ImageContainerHover>
      </ImageContainer>
      <FavoriteIcon onClick={() => toggleToFavorites(item)}>
        favorite
      </FavoriteIcon>
      <ProductDescription>
        <ProductDescriptionName>{item.name}</ProductDescriptionName>
        <ProductDescriptionPrice>${item.price.amount}</ProductDescriptionPrice>
      </ProductDescription>
    </ProductContainer>
  );
}

export default connect(null, { toggleToFavorites })(Product);
