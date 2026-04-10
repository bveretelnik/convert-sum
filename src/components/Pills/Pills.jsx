import React from 'react';
import styles from './Pills.module.scss';
import { clsx } from 'clsx';

const Pills = ({ pills, onClick, activePilsId }) => {
  return (
    <div className={styles.pills}>
      {pills.map(pill => (
        <div
          className={clsx(styles.pill, {
            [styles.pillActive]: pill.id === activePilsId,
          })}
          key={pill.id}
          onClick={() => onClick(pill)}
        >
          {pill.name}
        </div>
      ))}
    </div>
  );
};

export default Pills;
