import React from 'react';
import {render} from 'react-dom';
import domReady from 'domready';

function Hello() {
  return (
    <h1>Hello!</h1>
  );
}

domReady(() => {
  const container = document.getElementById('app');
  render(<Hello/>, container);
});
