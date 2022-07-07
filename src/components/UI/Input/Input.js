import React, { forwardRef } from 'react';

import classes from './Input.module.css';

const Input = forwardRef(function Input(props, ref) {
  return (
    <input
      type={props.type || 'text'}
      className={`${classes.input} ${props.className}`}
      placeholder={`${props.placeholder}`}
      ref={ref}
      value={`${props.value}`}
    >
      {props.children}
    </input>
  );
});

export default Input;
