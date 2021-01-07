import { createSelector } from 'reselect';

const selectFavorites = (state) => state.favorites;

export const selectFavoritesSelector = createSelector(
  [selectFavorites],
  (favorites) => favorites
);

export const selectFavoritesItems = createSelector(
  [selectFavorites],
  (favorites) => favorites.items
);
