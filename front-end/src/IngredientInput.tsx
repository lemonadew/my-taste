import type {AriaTextFieldProps} from 'react-aria';
import {useTextField} from 'react-aria';
import React from 'react';

function IngredientInput(props: AriaTextFieldProps) {
  let { label } = props;
  let ref = React.useRef(null);
  let {
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps
  } = useTextField(props, ref);

  return (
    <div
      style={{
        justifySelf: 'center',
        width: 200
        
      }}
    >
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div
          {...errorMessageProps}
          style={{ color: 'red', fontSize: 12 }}
        >
          {props.errorMessage}
        </div>
      )}
    </div>
  );
};



export default IngredientInput