import React from 'react';
import styles from './Button.module.scss';

const Button = ({ onClick, name }) => {
  return (
    <button className={styles.clearButton} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
