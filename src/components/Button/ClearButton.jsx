import React from 'react';
import styles from './ClearButton.module.scss';

const ClearButton = ({ onClick }) => {
  return (
    <button className={styles.clearButton} onClick={onClick}>
      Clear
    </button>
  );
};

export default ClearButton;
