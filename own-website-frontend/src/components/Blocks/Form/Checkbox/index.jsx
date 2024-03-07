import React, { useState } from 'react';
import { Check } from '../../../icons/Check';
//import { UseFormRegister, FieldErrorsImpl, FieldValues } from 'react-hook-form';
import { Error } from '../Error';
//import { Width } from '../Width';
import PropTypes from 'prop-types'; //honestly didnt matter this is jsx not tsx


import classes from './index.module.scss';

export const Checkbox = ({ name, label, width, register, setValue, getValues, required: requiredFromProps, errors }) => {
  const [checked, setChecked] = useState(false);

  const isCheckboxChecked = getValues(name);

  return (
    //<Width width={width}>
      <div
        className={[
          classes.checkbox,
          checked && classes.checked
        ].filter(Boolean).join(' ')}
      >
        <div className={classes.container}>
          <input
            type="checkbox"
            {...register(name, { required: requiredFromProps })}
            checked={isCheckboxChecked}
          />
          <button
            type="button"
            onClick={() => {
              setValue(name, !checked);
              setChecked(!checked);
            }}
          >
            <span className={classes.input}>
              <Check />
            </span>
          </button>
          <span className={classes.label}>{label}</span>
        </div>
        {requiredFromProps && errors[name] && checked === false && <Error />}
      </div>
    //</Width>
  );
};
Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  getValues: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.object,
};