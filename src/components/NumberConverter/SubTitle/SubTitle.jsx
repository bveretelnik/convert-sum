import React from 'react';
import styles from './SubTitle.module.scss';

const SubTitle = ({ value }) => {
  return <div className={styles.subTitle}>{value}</div>;
};

export default SubTitle;
