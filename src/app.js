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
      isActive: false,
      name: '',
      age: ''
    };
    this.toggleActiveState = this.toggleActiveState.bind(this);
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
  }

  render() {
    console.log(this.state);
    const style = this.state.isActive
      ?
      {backgroundColor: 'teal', color: 'white'}
      :
      {};
    return (
      <div style={style} onClick={this.toggleActiveState}>
        <h1>Marathon Estimate</h1>
        <Form
          fields={fields}
          name={this.state.name}
          age={this.state.age}
          onChange={this.handleFormFieldChange}
        />
      </div>
    );
  }

  toggleActiveState() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  handleFormFieldChange(value, id) {
    this.setState({
      [id]: value
    });
  }
}
