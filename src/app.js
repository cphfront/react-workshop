import React from 'react';
import {findDOMNode} from 'react-dom';

import Form from './form.js';

const fields = [
  {
    id: 'name',
    inputComponentName: 'TextInput',
    placeholder: 'Enter your name'
  },
  {
    id: 'age',
    inputComponentName: 'TextInput',
    placeholder: 'Enter your age'
  },
  {
    id: 'gender',
    inputComponentName: 'Radio',
    options: ['male', 'female', 'other']
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      formData: {
        name: '',
        age: ''
      }
    };
    this.toggleActiveState = this.toggleActiveState.bind(this);
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
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
        <Form
          fields={fields}
          formData={this.state.formData}
          onChange={this.handleFormFieldChange}
        />
        <div
          ref='google-map'
          style={{width: '100px', height: '100px', backgroundColor: '#bada55'}}
        />
      </div>
    );
  }

  componentDidMount() {
    const node = findDOMNode(this.refs['google-map']);
    const el = document.createElement('p');
    el.innerHTML = 'hello!';
    node.appendChild(el);
    el.addEventListener('click', this.onCustomElementClick);
    this.el = el;
  }

  componentWillUnmount() {
    this.el.removeEventListener('click', this.onCustomElementClick);
  }

  onCustomElementClick() {
    alert('hello!');
  }

  toggleActiveState() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  handleFormFieldChange(value, id) {
    this.setState({
      formData: Object.assign({}, this.state.formData, {
        [id]: value
      })
    });
  }

  // TODO: implement
  sendFormData() {
    fetch('marathon.com/api', {
      method: 'POST',
      body: JSON.stringify(this.state.formData)
    });
  }
}
