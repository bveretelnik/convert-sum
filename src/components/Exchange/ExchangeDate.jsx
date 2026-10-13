import React from 'react';
import styles from './Exchange.module.scss';

const ExchangeDate = ({ date, setDate }) => {
  const handleDateSelection = event => {
    const selectedDate = event.target.value;

    if (selectedDate !== date) {
      setDate(selectedDate);
    }
  };

  return (
    <label className={styles.exchangeDateInputLabel}>
      Оберіть дату:
      <input
        type="date"
        value={date}
        className={styles.exchangeDateInput}
        onChange={handleDateSelection}
      />
    </label>
  );
};

export default ExchangeDate;
