import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

const Input = forwardRef(({ value, onChange }, ref) => {
  return (
    <input
      className={styles.convectorInput}
      type="text"
      value={value}
      ref={ref}
      onChange={onChange}
      placeholder="Put the number"
    />
  );
});

export default Input;
