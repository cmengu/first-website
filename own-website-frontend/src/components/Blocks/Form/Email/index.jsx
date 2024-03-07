import React from 'react';
import PropTypes from 'prop-types';  // //honestly didnt matter this is jsx not tsx
import { Error } from '../Error';
//import { Width } from '../Width';

import classes from './index.module.scss';

export const Email = ({ name, width, label, register, required: requiredFromProps, errors }) => {
  return (
    //<Width width={width}>
      <div className={classes.wrap}>
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
        <input
          type="email"
          placeholder="Email"
          className={classes.input}
          id={name}
          {...register(name, { required: requiredFromProps, pattern: /^\S+@\S+$/i })}
        />
        {requiredFromProps && errors[name] && <Error />}
      </div>
    //</Width>
  );
};

// Prop types for the Email component
Email.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.object,
};



