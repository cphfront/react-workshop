import React from 'react';

import Organ from './organ.js';

const BASE_URL = 'http://api.socialsquare.dk/';
const AUTH_TOKEN = '';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.getURL = (path) => {
      return BASE_URL + path + '/?auth_token=' + AUTH_TOKEN;
    };
    this.state = {
      organ: null
    };
  }

  componentDidMount() {
    this.serverRequest = $.get(this.getURL('organs/socialsquare/tree'), function (result) {
      this.setState({
        organ: result
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        <header>
          <h1>&ldquo;Data-driven Recursive Graphics in React!&rdquo;</h1>
          <h2>{this.state.organ ? this.state.organ.name : 'Loading ...'}</h2>
        </header>
        <Organ organ={this.state.organ} />
      </div>
    );
  }
}
