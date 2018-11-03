import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { navMiddleware } from '../navigation';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import axiosMiddleware from 'redux-axios-middleware';
import { client, interceptors } from '../services/common';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';

const logger = createLogger({collapsed: true});

const persistConfig = {
  key: 'root',
  blacklist: ['navigation'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(navMiddleware, thunk, axiosMiddleware(client, {interceptors}), logger)
);

const persistor = persistStore(store);

export {
  store,
  persistor
};
