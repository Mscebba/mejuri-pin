import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import rootReducer from 'redux/rootReducer';

const middlewares = [thunk];

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
