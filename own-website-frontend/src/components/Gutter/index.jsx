import React, { forwardRef } from 'react';
import classes from './index.module.scss';

const Gutter = forwardRef((props, ref) => {
  const {
    left = true,
    right = true,
    className,
    children
  } = props;

  return (
    <div
      ref={ref}
      className={[
        left && classes.gutterLeft,
        right && classes.gutterRight,
        className
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
});

Gutter.displayName = 'Gutter';

export default Gutter;
