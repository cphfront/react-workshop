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

export default function App() {
  return (
    <div>
      <h1>Marathon Estimate</h1>
      <Form fields={fields}></Form>
    </div>
  );
}
