import React from 'react';

export default function Form(props) {
  return (
    <form>
      {
        props.fields.map(({id, placeholder}, i) => {
          function handleChange(e) {
            props.onChange(e.target.value, id);
          }
          return (
            <input
              key={i}
              id={id}
              value={props[id]}
              type='text'
              placeholder={placeholder}
              onChange={handleChange}
            />
          );
        })
      }
    </form>
  );
}
