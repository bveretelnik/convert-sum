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
    />
  </label>
);

export default ExchangeDate;
