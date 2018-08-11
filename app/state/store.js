import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { navMiddleware } from '../navigation';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(navMiddleware, thunk)
);

const persistor = persistStore(store);

export {
  store,
  persistor
};
