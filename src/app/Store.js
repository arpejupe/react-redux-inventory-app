import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import { createBrowserHistory } from "history";
import { routerMiddleware } from 'connected-react-router';

import createSagaMiddleware from 'redux-saga';

import * as sagas from './Sagas';
import reducer from './Reducers';

export const history = createBrowserHistory();

function configureStoreDev(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const reactRouterMiddleware = routerMiddleware(history);
  const middleWares = [sagaMiddleware, reactRouterMiddleware];
  const composables = [applyMiddleware(...middleWares)];
  const enhancer = compose(
      ...composables
  );
  const store = createStore(
      reducer(history),
      initialState,
      enhancer,
  );
  sagas.registerWithMiddleware(sagaMiddleware);
  return store;
};

function configureStoreProd(initialState) {
  // Define production configuration here
  return configureStoreDev(initialState);
};

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;