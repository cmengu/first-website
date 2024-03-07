import React from 'react';
import classes from './index.module.scss';

export const VerticalPadding = ({
  top = 'medium',
  bottom = 'medium',
  className,
  children,
}) => {
  return (
    <div
      className={[
        className,
        classes[`top-${top}`],
        classes[`bottom-${bottom}`],
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
};
