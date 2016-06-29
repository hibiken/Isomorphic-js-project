import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import _ from 'lodash';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('redux-store');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error occurred while loading state from Local Storage');
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('redux-store', serializedState);
  } catch (err) {
    console.error('Error occurred while persisting state to Local Storage');
  }
};

const configureStore = (intialState = {}, history) => {
  // TODO: set NODE_ENV
  // let enhancer;
  // if (process.env.NODE_ENV === 'development') {
  //   const createLogger = require('redux-logger');
  //   const logger = createLogger();
  //   enhancer = applyMiddleware(thunk, logger);
  // } else {
  //   enhancer = applyMiddleware(thunk);
  // }

  const createLogger = require('redux-logger');
  const logger = createLogger();
  const enhancer = applyMiddleware(thunk, routerMiddleware(history), logger);

  const persistedState = loadState();

  const store = createStore(rootReducer, persistedState, enhancer);

  store.subscribe(_.throttle(() => {
    const state = store.getState();
    const stateToPersist = {
      currentUser: state.currentUser,
    };
    saveState(stateToPersist);
  }, 1000));

  return store;
};

export default configureStore;
