import { createAction } from 'redux-actions';

export const activateApplication = createAction('ACTIVATE_APPLICATION');
export const updateFormValue = createAction('UPDATE_FORM_VALUE', (propertyName, value) => ({propertyName, value}));

