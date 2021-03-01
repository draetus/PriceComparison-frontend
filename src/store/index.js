import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import navigationDebouncer from 'react-navigation-redux-debouncer';

import pageReducers from './reducers';
import sagas from './sagas';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const enhancers = [applyMiddleware(...middleware, navigationDebouncer(500))];
const initialState = {};
const store = createStore(pageReducers, initialState, compose(...enhancers));

const configureStore = () => {
  return {store};
};

sagaMiddleware.run(sagas);

export default configureStore;
