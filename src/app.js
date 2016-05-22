import React from 'react';

import Form from './form.js';

const fields = [
  {
    id: 'name',
    placeholder: 'Enter your name'
  },
  {
    id: 'age',
    placeholder: 'Enter your age'
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.toggleActiveState = this.toggleActiveState.bind(this);
  }

  render() {
    const style = this.state.isActive
      ?
      {backgroundColor: 'teal', color: 'white'}
      :
      {};
    return (
      <div style={style} onClick={this.toggleActiveState}>
        <h1>Marathon Estimate</h1>
        <Form fields={fields}></Form>
      </div>
    );
  }

  toggleActiveState() {
    this.setState({
      isActive: !this.state.isActive
    });
  }
}
