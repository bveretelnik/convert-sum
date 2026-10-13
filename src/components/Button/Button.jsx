import React from 'react';
import styles from './Button.module.scss';
import { clsx } from 'clsx';

const Button = ({ onClick, name, variant = 'primary', ...props }) => {
  return (
    <button
      type="button"
      className={clsx(styles.button, styles[variant])}
      onClick={onClick}
      {...props}
    >
      {name}
    </button>
  );
};

export default Button;
