import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { productsReducer as products } from 'redux/products/products-reducer';
import { favoritesReducer as favorites } from 'redux/favorites/favorites-reducer';

const rootReducer = combineReducers({
  products,
  favorites,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['products'],
};

export default persistReducer(persistConfig, rootReducer);
