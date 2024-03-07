import React from 'react';
import PropTypes from 'prop-types'; //honestly didnt matter this is jsx not tsx
//import { UseFormRegister, FieldValues, FieldErrorsImpl } from 'react-hook-form';
import { Error } from '../Error';
//import { Width } from '../Width';

import classes from './index.module.scss';

export const Text = ({ name, label, width, register, required: requiredFromProps, errors }) => {

  return (
    //<Width width={width}>
      <div className={classes.wrap}>
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
        <input
          type="text"
          className={classes.input}
          id={name}
          {...register(name, { required: requiredFromProps })}
        />
        {requiredFromProps && errors[name] && <Error />}
      </div>
    //</Width>
  );
};
Text.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.object,
  blockType: PropTypes.string,
};


