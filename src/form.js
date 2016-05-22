import React from 'react';

export default function Form(props) {
  return (
    <form>
      {
        props.fields.map(({id, placeholder}, i) => {
          return (
            <input
              key={i}
              id={id}
              type='text'
              placeholder={placeholder}
            />
          );
        })
      }
    </form>
  );
}
