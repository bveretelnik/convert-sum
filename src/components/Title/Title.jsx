import React from 'react';
import styles from './Title.module.scss';

const Title = () => (
  <h1 className={styles.convectorTitle}>
    <span className={styles.brandMark} aria-hidden="true">
      ↗
    </span>
    <span>Convert</span>
    <span className={styles.sum}>Sum</span>
  </h1>
);

export default Title;
