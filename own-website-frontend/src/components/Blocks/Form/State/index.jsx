import React from 'react';
import PropTypes from 'prop-types';  //honestly didnt matter this is jsx not tsx
import ReactSelect from 'react-select';
import { Controller, Control } from 'react-hook-form';
import { stateOptions } from './options';
import { Error } from '../Error';
//import { Width } from '../Width';

import classes from './index.module.scss';

export const State = ({ name, label, width, control, required, errors }) => {
  return (
    //<Width width={width}>
      <div className={classes.select}>
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
        <Controller
          control={control}
          rules={{ required }}
          name={name}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <ReactSelect
              instanceId={name}
              options={stateOptions}
              value={stateOptions.find(t => t.value === value)}
              onChange={(val) => onChange(val.value)}
              className={classes.reactSelect}
              classNamePrefix="rs"
              inputId={name}
            />
          )}
        />
        {required && errors[name] && <Error />}
      </div>
    //</Width>
  );
};

// Prop types for the State component
State.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  control: PropTypes.object.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.object,
};



