import React from 'react';

import Form from './form.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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

export default function App() {
    return(
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <MyAwesomeReactComponent />
        </MuiThemeProvider>
    );
};

class MyAwesomeReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        age: ''
      }
    };
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
  }

  render() {
    console.log(this.state);
    return (
      <div >
        <h1>Marathon Estimate</h1>
        <Form
          fields={fields}
          formData={this.state.formData}
          onChange={this.handleFormFieldChange}
        />
      </div>
    );
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
