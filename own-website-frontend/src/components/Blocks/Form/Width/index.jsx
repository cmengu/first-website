import React from 'react';
import classes from './index.module.scss';

const Width = ({ width, children }) => {
  return (
    <div
      className={classes.width}
      style={{ width: width ? `${width}%` : undefined }}
    >
      {children}
    </div>
  );
};

export default Width;
