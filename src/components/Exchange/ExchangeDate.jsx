import React from 'react';
import styles from './Exchange.module.scss';

const ExchangeDate = ({ date, setDate }) => (
  <label className={styles.exchangeDateInputLabel}>
    Обери дату:
    <input
      type="date"
      value={date}
      className={styles.exchangeDateInput}
      onChange={e => setDate(e.target.value)}
      style={{
        marginLeft: '0.5rem',
        padding: '0.3rem 0.5rem',
        borderRadius: '6px',
        border: '1px solid #ccc',
      }}
    />
  </label>
);

export default ExchangeDate;
