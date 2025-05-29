import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

const Input = forwardRef(({ value, onChange, placeholder }, ref) => {
  return (
    <input
      className={styles.convectorInput}
      type="text"
      value={value}
      ref={ref}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
});

export default Input;
