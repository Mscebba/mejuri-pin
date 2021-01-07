import * as actionTypes from 'redux/products/products-types';

const INITIAL_STATE = {
  isLoading: false,
  productItems: [],
  subcategory: null,
  error: '',
};

export function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        isLoading: true,
        productItems: [],
        subcategory: null,
        error: '',
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        isLoading: false,
        productItems: action.payload,
        error: '',
        subcategory: null,
      };
    case actionTypes.FETCH_ERROR:
      return {
        isLoading: false,
        productItems: [],
        error: action.payload,
        subcategory: null,
      };

    case actionTypes.FILTER_SUBCATEGORY:
      return {
        ...state,
        subcategory: action.payload,
      };

    default:
      return state;
  }
}

export default productsReducer;
