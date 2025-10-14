import React from 'react';
import styles from './Exchange.module.scss';
import { clsx } from 'clsx';
import ExchangeItem from './ExchangeItem.jsx';

const ExchangeList = ({ items }) => {
  return (
    <ul className={styles.exchangeList}>
      {items.map(r => (
        <ExchangeItem key={r.cc} value={r.rate} name={r.cc} />
      ))}
    </ul>
  );
};

export default ExchangeList;
