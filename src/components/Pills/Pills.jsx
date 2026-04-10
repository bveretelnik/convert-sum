import React from 'react';
import styles from './Pills.module.scss';

const Pills = ({ pills, onClick }) => {
  return (
    <div className={styles.pills}>
      {pills.map(pill => (
        <div
          className={styles.pill}
          key={pill.id}
          onClick={() => onClick(pill.commission)}
        >
          {pill.name}
        </div>
      ))}
    </div>
  );
};

export default Pills;
