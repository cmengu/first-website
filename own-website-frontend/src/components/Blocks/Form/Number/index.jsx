import React from 'react';
import PropTypes from 'prop-types';  //honestly didnt matter this is jsx not tsx
import { Error } from '../Error';
//import { Width } from '../Width';

import classes from './index.module.scss';

export const Number = ({ name, label, width, register, required: requiredFromProps, errors }) => {
  return (
    //<Width width={width}>
      <div className={classes.wrap}>
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
        <input
          type="number"
          className={classes.input}
          id={name}
          {...register(name, { required: requiredFromProps })}
        />
        {requiredFromProps && errors[name] && <Error />}
      </div>
   // </Width>
  );
};

// Prop types for the Number component
Number.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.object,
};
