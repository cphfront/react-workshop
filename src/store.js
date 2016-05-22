import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer.js';

export default function configureStore(initialState) {
  return createStore(reducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
}
