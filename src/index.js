import React from 'react';
import {render} from 'react-dom';
import domReady from 'domready';

import App from './app';

import injectTapEventPlugin from 'react-tap-event-plugin';


domReady(() => {

  // Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  const container = document.getElementById('app');
  render(<App/>, container);
});
