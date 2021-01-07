import * as actionTypes from 'redux/favorites/favorites-types';

export function toggleToFavorites(item) {
  return {
    type: actionTypes.TOGGLE_TO_FAVORITES,
    payload: item,
  };
}
