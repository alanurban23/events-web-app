/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, compose(applyMiddleware(thunk), composeEnhancers()));
