import React from 'react';
import ReactSelect from 'react-select';
import { Controller, Control } from 'react-hook-form';
import { countryOptions } from './options';
import { Error } from '../Error';
//import { Width } from '../Width';
import PropTypes from 'prop-types'; //honestly didnt matter this is jsx not tsx

import classes from './index.module.scss';

export const Country = ({ name, label, width, control, required, errors }) => {
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
              options={countryOptions}
              value={countryOptions.find(c => c.value === value)}
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

Country.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  control: PropTypes.object.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.object,
};