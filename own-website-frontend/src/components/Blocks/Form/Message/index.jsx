import React from 'react';
import PropTypes from 'prop-types';  //honestly didnt matter this is jsx not tsx
import RichText from '../../../RichText';
//import { Width } from '../Width';

import classes from './index.module.scss';

export const Message = ({ message }) => {
  return (
   // <Width width="100">
      <RichText
        content={message}
        className={classes.message}
      />
   // </Width>
  );
};

// Prop types for the Message component
Message.propTypes = {
  message: PropTypes.string.isRequired,  // Adjust the type based on your actual data type
};