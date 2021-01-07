import * as actionTypes from 'redux/favorites/favorites-types';
import { toggleToFavorites } from 'redux/favorites/favorites-utils';

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: '',
};

export function favoritesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_TO_FAVORITES:
      return {
        ...state,
        items: toggleToFavorites(state.items, action.payload),
      };

    default:
      return state;
  }
}

export default favoritesReducer;
