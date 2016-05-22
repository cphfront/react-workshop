import React from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

export function TextInput({value, placeholder, onChange, id}) {
  return (
    <TextField
      name={id}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {onChange(e.target.value, id);}}
    />
  );
}

export function Radio({value, options, placeholder, onChange, id}) {
  return (
    <RadioButtonGroup
        valueSelected={value}
        name={id}
    >
      {
        options.map((option, i) => {
          return (
            <RadioButton
                key={i}
                value={option}
                onChange={(e) => {onChange(e.target.value, id);}}
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                label={option}
            />
          );
        })
      }
    </RadioButtonGroup>
  );
}
