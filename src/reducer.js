import objectAssign from 'object-assign';
import { handleActions } from 'redux-actions';

const initialState = {
  fields: [
    {
      id: 'name',
      inputComponentName: 'TextInput',
      placeholder: 'Enter your name',
      value: ''
    },
    {
      id: 'age',
      inputComponentName: 'TextInput',
      placeholder: 'Enter your age',
      value: ''
    },
    {
      id: 'gender',
      inputComponentName: 'Radio',
      options: ['male', 'female', 'other'],
      value: []
    }
  ],
  isActive: false
};

const appState = handleActions({
  'UPDATE_FORM_VALUE': function (state, action) {
    let newState = objectAssign({}, state);
    newState.fields = newState.fields.map(function(field) {
      console.log(field);
      if (field.id == action.payload.propertyName) {
        field.value = action.payload.value;
      }
      return field;
    });
    return newState;
  },
  'ACTIVATE_APPLICATION': (state, action) => objectAssign({}, state, {isActive: true})
}, initialState);

export default appState;
