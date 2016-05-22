import React from 'react';
import {render} from 'react-dom';
import domReady from 'domready';
import App from './app.js';
import { Provider } from 'react-redux';
import configureStore from './store.js';

const store = configureStore();

domReady(() => {
  const container = document.getElementById('app');
  render(
    <Provider store={store}>
      <App/>
    </Provider>, container);
});
