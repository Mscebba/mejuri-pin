import axios from 'axios';

import * as actionTypes from 'redux/products/products-types';

export function fetchProducts() {
  return {
    type: actionTypes.FETCH_START,
  };
}

export function fetchProductsSuccess(productItems) {
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload: productItems,
  };
}

export function fetchProductsError(error) {
  return {
    type: actionTypes.FETCH_ERROR,
    payload: error,
  };
}

export function filterSubCategory(id) {
  return {
    type: actionTypes.FILTER_SUBCATEGORY,
    payload: id,
  };
}

export function fetchData(api) {
  return (dispatch) => {
    dispatch(fetchProducts());
    axios
      .get(api, { crossdomain: true })
      .then((res) => {
        const productItems = res.data;
        dispatch(fetchProductsSuccess(productItems));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductsError(errorMsg));
      });
  };
}
