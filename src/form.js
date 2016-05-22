import React from 'react';

export default function Form(props) {
  return (
    <form>
      {
        props.fields.map(({id, placeholder}, i) => {
          return (
            <input
              key={i}
              value={props.formData[id]}
              type='text'
              placeholder={placeholder}
              onChange={(e) => {props.onChange(e.target.value, id)}}
            />
          );
        })
      }
    </form>
  );
}
