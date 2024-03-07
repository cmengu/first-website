import React from 'react';
import PropTypes from 'prop-types';  //honestly didnt matter this is jsx not tsx
import { Error } from '../Error';
//import { Width } from '../Width';

import classes from './index.module.scss';

export const Textarea = ({ name, label, width, rows = 3, register, required: requiredFromProps, errors }) => {
  return (
    //<Width width={width}>
      <div className={classes.wrap}>
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
        <textarea
          rows={rows}
          className={classes.textarea}
          id={name}
          {...register(name, { required: requiredFromProps })}
        />
        {requiredFromProps && errors[name] && <Error />}
      </div>
   // </Width>
  );
};

// Prop types for the Textarea component
Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  rows: PropTypes.number,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.object,
};


