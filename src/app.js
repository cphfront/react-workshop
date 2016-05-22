import React from 'react';
import Form from './form.js';
import { connect } from 'react-redux';
import * as actions from './actions.js';
import { bindActionCreators } from 'redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
  }

  render() {
    const style = this.props.appState.isActive
      ?
      {backgroundColor: 'teal', color: 'white'}
      :
      {};
    return (
      <div style={style} onClick={this.props.actions.activateApplication}>
        <h1>Marathon Estimate</h1>
        <Form
          fields={this.props.appState.fields}
          onChange={this.handleFormFieldChange}
        />
      </div>
    );
  }

  handleFormFieldChange(value, id) {
    this.props.actions.updateFormValue(id, value);
  }

  // TODO: implement
  sendFormData() {
    fetch('marathon.com/api', {
      method: 'POST',
      body: JSON.stringify(this.state.formData)
    });
  }
}

function mapStateToProps(state) {
  return {
    appState: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



