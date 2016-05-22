import React from 'react';
import {render} from 'react-dom';
import domReady from 'domready';

import App from './app.js';

require('../styles/main.scss');

domReady(() => {
  const container = document.getElementById('app');
  render(<App/>, container);
});
