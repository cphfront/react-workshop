import React from 'react';

import * as inputComponents from './inputs.js';

export default function Form(props) {
  return (
    <form>
      {
        props.fields.map((field, i) => {
          const Comp = inputComponents[field.inputComponentName];
          return (
            <Comp
              {...field}
              key={i}
              onChange={props.onChange}
            />
          );
        })
      }
    </form>
  );
}
